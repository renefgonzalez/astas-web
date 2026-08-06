import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Plus, Minus, X, Check, ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
}

interface CustomerInfo {
  name: string;
  phone: string;
  email: string;
  address: string;
  deliveryMethod: 'pickup' | 'delivery';
  paymentMethod: 'cash' | 'transfer' | 'card';
}

const PRODUCTS = [
  {
    id: '1',
    name: 'Asta Bandera 5 Metros',
    price: 3500,
    description: 'Asta de acero galvanizado, perfecta para oficinas y comercios'
  },
  {
    id: '2',
    name: 'Asta Bandera 10 Metros',
    price: 7500,
    description: 'Asta monumentale certificada AWS para espacios públicos'
  },
  {
    id: '3',
    name: 'Asta Bandera 20 Metros',
    price: 15000,
    description: 'Asta telescópica de alta resistencia para ubicaciones estratégicas'
  },
  {
    id: '4',
    name: 'Servicio de Mantenimiento Anual',
    price: 2500,
    description: 'Inspección, limpieza y mantenimiento preventivo completo'
  },
  {
    id: '5',
    name: 'Reparación de Soldadura',
    price: 1800,
    description: 'Reparación certificada de soldadura con pruebas NDT'
  },
];

const DemoCarrito = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartStep, setCartStep] = useState<1 | 2>(1);
  const [showCart, setShowCart] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: '',
    phone: '',
    email: '',
    address: '',
    deliveryMethod: 'pickup',
    paymentMethod: 'cash',
  });

  const addToCart = (product: typeof PRODUCTS[0]) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      setCart(prev => prev.filter(item => item.id !== id));
    } else {
      setCart(prev =>
        prev.map(item => (item.id === id ? { ...item, quantity } : item))
      );
    }
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckout = () => {
    if (!customerInfo.name || !customerInfo.phone) {
      alert('Por favor completa nombre y teléfono');
      return;
    }
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setCart([]);
      setCartStep(1);
      setShowCart(false);
      setCustomerInfo({
        name: '',
        phone: '',
        email: '',
        address: '',
        deliveryMethod: 'pickup',
        paymentMethod: 'cash',
      });
    }, 3000);
  };

  return (
    <>
      <SEOHead
        title="Demo Carrito | Astas y Mantenimiento"
        description="Prueba la experiencia de compra en línea de Astas y Mantenimiento. Carrito de compras interactivo con cálculo de totales y checkout simulado."
        path="/demo-carrito"
        noindex={true}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tight">
            Demo de Compra - Astas y Mantenimiento
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Este es un prototipo funcional del carrito de compras con integración de Mercado Pago.
            Selecciona productos, agrega al carrito y completa tu compra.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Productos */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-black text-slate-900 uppercase">Catálogo de Productos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PRODUCTS.map(product => (
                <motion.div
                  key={product.id}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-xl shadow-md p-6 border border-slate-200 hover:shadow-lg transition-shadow"
                >
                  <div className="h-40 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg mb-4 flex items-center justify-center">
                    <ShoppingCart className="w-12 h-12 text-white opacity-50" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 text-lg">{product.name}</h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-black text-blue-600">${product.price.toLocaleString()}</span>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Carrito Resumen */}
          <div className="sticky top-24">
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6 border border-blue-200"
              layout
            >
              <div className="flex items-center gap-2 mb-4">
                <ShoppingCart className="w-6 h-6 text-blue-600" />
                <h3 className="font-black text-lg uppercase">Carrito</h3>
                {totalItems > 0 && (
                  <span className="ml-auto bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                    {totalItems}
                  </span>
                )}
              </div>

              {cart.length === 0 ? (
                <p className="text-slate-500 text-center py-8">Selecciona productos para empezar</p>
              ) : (
                <>
                  <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                    {cart.map(item => (
                      <div key={item.id} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                        <div className="flex-1">
                          <p className="font-bold text-sm text-slate-900">{item.name}</p>
                          <p className="text-xs text-slate-600">${item.price.toLocaleString()} c/u</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="text-slate-600 hover:text-slate-900"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-6 text-center font-bold text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="text-slate-600 hover:text-slate-900"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <button
                          onClick={() => updateQuantity(item.id, 0)}
                          className="ml-2 text-red-600 hover:text-red-700"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-slate-200 pt-4 space-y-2 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Subtotal:</span>
                      <span className="font-bold">${cartTotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Envío:</span>
                      <span className="font-bold">Gratis</span>
                    </div>
                    <div className="flex justify-between text-lg font-black pt-2 border-t border-slate-200">
                      <span>Total:</span>
                      <span className="text-blue-600">${cartTotal.toLocaleString()}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setShowCart(true);
                      setCartStep(1);
                    }}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold uppercase tracking-wide transition-all active:scale-95"
                  >
                    Proceder al Pago
                  </button>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Modal de Carrito/Checkout */}
      <AnimatePresence>
        {showCart && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setShowCart(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
            >
              {/* Steps Indicator */}
              <div className="flex gap-2 p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <div className={`flex-1 text-center font-bold ${cartStep === 1 ? 'border-b-4 border-white pb-2' : 'opacity-50'}`}>
                  Datos
                </div>
                <div className={`flex-1 text-center font-bold ${cartStep === 2 ? 'border-b-4 border-white pb-2' : 'opacity-50'}`}>
                  Pago
                </div>
              </div>

              {/* Paso 1: Datos del Cliente */}
              {cartStep === 1 && (
                <div className="p-6 space-y-4">
                  <h3 className="font-black text-lg uppercase">Tus Datos</h3>

                  <input
                    type="text"
                    placeholder="Nombre completo"
                    value={customerInfo.name}
                    onChange={e => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />

                  <input
                    type="tel"
                    placeholder="Teléfono (WhatsApp)"
                    value={customerInfo.phone}
                    onChange={e => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />

                  <input
                    type="email"
                    placeholder="Correo (opcional)"
                    value={customerInfo.email}
                    onChange={e => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />

                  <div>
                    <label className="block text-sm font-bold mb-2 uppercase">Método de Entrega</label>
                    <select
                      value={customerInfo.deliveryMethod}
                      onChange={e => setCustomerInfo({ ...customerInfo, deliveryMethod: e.target.value as 'pickup' | 'delivery' })}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                      <option value="pickup">Recoger en oficina</option>
                      <option value="delivery">Envío a domicilio</option>
                    </select>
                  </div>

                  {customerInfo.deliveryMethod === 'delivery' && (
                    <input
                      type="text"
                      placeholder="Dirección de entrega"
                      value={customerInfo.address}
                      onChange={e => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  )}

                  <button
                    onClick={() => setCartStep(2)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold uppercase transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    Siguiente <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Paso 2: Forma de Pago */}
              {cartStep === 2 && (
                <div className="p-6 space-y-4">
                  <h3 className="font-black text-lg uppercase">Forma de Pago</h3>

                  <div className="space-y-3">
                    <label className="flex items-center gap-3 p-3 border-2 border-slate-300 rounded-lg cursor-pointer hover:border-blue-600 hover:bg-blue-50 transition-all" style={{borderColor: customerInfo.paymentMethod === 'cash' ? '#2563eb' : undefined}}>
                      <input
                        type="radio"
                        name="payment"
                        value="cash"
                        checked={customerInfo.paymentMethod === 'cash'}
                        onChange={e => setCustomerInfo({ ...customerInfo, paymentMethod: 'cash' })}
                      />
                      <span className="font-bold">💵 Efectivo (al entregar)</span>
                    </label>

                    <label className="flex items-center gap-3 p-3 border-2 border-slate-300 rounded-lg cursor-pointer hover:border-blue-600 hover:bg-blue-50 transition-all" style={{borderColor: customerInfo.paymentMethod === 'transfer' ? '#2563eb' : undefined}}>
                      <input
                        type="radio"
                        name="payment"
                        value="transfer"
                        checked={customerInfo.paymentMethod === 'transfer'}
                        onChange={e => setCustomerInfo({ ...customerInfo, paymentMethod: 'transfer' })}
                      />
                      <span className="font-bold">🏦 Transferencia Bancaria</span>
                    </label>

                    <label className="flex items-center gap-3 p-3 border-2 border-slate-300 rounded-lg cursor-pointer hover:border-blue-600 hover:bg-blue-50 transition-all" style={{borderColor: customerInfo.paymentMethod === 'card' ? '#2563eb' : undefined}}>
                      <input
                        type="radio"
                        name="payment"
                        value="card"
                        checked={customerInfo.paymentMethod === 'card'}
                        onChange={e => setCustomerInfo({ ...customerInfo, paymentMethod: 'card' })}
                      />
                      <span className="font-bold">💳 Tarjeta (Mercado Pago)</span>
                    </label>
                  </div>

                  {customerInfo.paymentMethod === 'card' && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-900">
                      ℹ️ Se abrirá Mercado Pago para completar el pago con tarjeta. Aquí usarías tarjetas de prueba.
                    </div>
                  )}

                  <div className="bg-slate-100 rounded-lg p-4 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Total a pagar:</span>
                      <span className="font-black text-lg text-blue-600">${cartTotal.toLocaleString()}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleCheckout}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold uppercase transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    <Check className="w-5 h-5" /> Confirmar Compra
                  </button>

                  <button
                    onClick={() => setCartStep(1)}
                    className="w-full border-2 border-slate-300 text-slate-600 py-2 rounded-lg font-bold uppercase hover:bg-slate-50 transition-all"
                  >
                    Atrás
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal de Éxito */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white rounded-2xl p-8 text-center max-w-sm"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <Check className="w-8 h-8 text-green-600" />
              </motion.div>
              <h2 className="text-2xl font-black mb-2">¡Compra Exitosa!</h2>
              <p className="text-slate-600 mb-2">Gracias {customerInfo.name}</p>
              <p className="text-sm text-slate-500">
                Te enviaremos un WhatsApp con los detalles de tu pedido al número {customerInfo.phone}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </>
  );
};

export default DemoCarrito;
