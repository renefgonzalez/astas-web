import fs from 'node:fs';
import path from 'node:path';
import puppeteer from 'puppeteer';

const outDir = path.resolve('public/fichas-tecnicas');
fs.mkdirSync(outDir, { recursive: true });

const logoPath = path.resolve('public/logo.png');
const logoB64 = fs.existsSync(logoPath)
  ? `data:image/png;base64,${fs.readFileSync(logoPath).toString('base64')}`
  : '';

const modelos = [
  {
    archivo: 'Ficha_Tecnica_Asta_Bandera_7.62m_25_Pies.pdf',
    codigo: 'FT-AM-25FT',
    titulo: 'ASTA BANDERA INSTITUCIONAL 7.62 m (25 PIES)',
    subtitulo: 'Tubería Acero al Carbón Cédula 40 · Tramos Ensamblables · Izaje Manual / Matraca',
    alturaM: '7.62 m',
    alturaFt: "25'",
    tramos: '2 o 3 secciones ensamblables (largo máx. de envío ≤ 7.30 m)',
    diametros: 'Base 4" Céd. 40 → Medio 3" Céd. 40 → Punta 2" Céd. 40',
    placaBase: '350 × 350 mm · Espesor 3/8" (9.5 mm) · 4 cartabones',
    anclas: '4 pernos de anclaje Ø 5/8" × 50 cm (canastilla con plantilla)',
    dado: '0.60 × 0.60 × 0.80 m · Concreto armado f\'c = 250 kg/cm²',
    cable: 'Cable de acero galvanizado o inox 3/16" + polea industrial / bronce',
    bandera: '1.50 × 2.50 m (Nylon Ripstop / Poliéster UV)',
    pesoAprox: '~135 – 165 kg (estructura sin cimentación)',
    viento: 'Diseño estructural hasta 110 km/h (arriar bandera a > 45 km/h)',
  },
  {
    archivo: 'Ficha_Tecnica_Asta_Bandera_9.14m_30_Pies.pdf',
    codigo: 'FT-AM-30FT',
    titulo: 'ASTA BANDERA INSTITUCIONAL 9.14 m (30 PIES)',
    subtitulo: 'Tubería Acero al Carbón Cédula 40 · Tramos Ensamblables · Izaje Manual / Matraca',
    alturaM: '9.14 m',
    alturaFt: "30'",
    tramos: '2 o 3 secciones ensamblables (largo máx. de envío ≤ 7.30 m)',
    diametros: 'Base 4" Céd. 40 → Medio 3" Céd. 40 → Punta 2-1/2" / 2" Céd. 40',
    placaBase: '400 × 400 mm · Espesor 1/2" (12.7 mm) · 4 cartabones',
    anclas: '4 pernos de anclaje Ø 3/4" × 60 cm (canastilla con plantilla)',
    dado: '0.70 × 0.70 × 0.90 m · Concreto armado f\'c = 250 kg/cm²',
    cable: 'Cable de acero galvanizado o inox 3/16" + polea industrial / bronce',
    bandera: '1.50 × 2.50 m o 1.80 × 3.00 m (Nylon Ripstop / Poliéster UV)',
    pesoAprox: '~180 – 215 kg (estructura sin cimentación)',
    viento: 'Diseño estructural hasta 120 km/h (arriar bandera a > 45 km/h)',
  },
];

function renderHTML(m) {
  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8" />
<style>
  @page { size: letter portrait; margin: 10mm; }
  * { box-sizing: border-box; }
  body {
    font-family: 'Segoe UI', Arial, Helvetica, sans-serif;
    margin: 0; padding: 0; color: #0f172a; font-size: 9.2pt; line-height: 1.35;
  }
  .header {
    background: #0f172a; color: #fff; padding: 12px 16px; border-radius: 6px;
    display: flex; align-items: center; justify-content: space-between;
    border-bottom: 4px solid #1d4ed8;
  }
  .header-left { display: flex; align-items: center; gap: 12px; }
  .header-left img { width: 44px; height: 44px; object-fit: contain; background: #fff; border-radius: 6px; padding: 3px; }
  .brand { font-size: 13pt; font-weight: 800; letter-spacing: 0.4px; }
  .brand-sub { font-size: 7.8pt; color: #bfdbfe; }
  .doc-box { text-align: right; background: #1e293b; padding: 6px 11px; border-radius: 5px; }
  .doc-box small { display: block; color: #93c5fd; font-size: 7pt; font-weight: 700; text-transform: uppercase; }
  .doc-box strong { font-size: 10pt; color: #fff; }

  .title-bar {
    margin: 10px 0 8px; padding: 8px 12px; background: #eff6ff; border-left: 4px solid #1d4ed8;
    border-radius: 4px;
  }
  .title-bar h1 { margin: 0; font-size: 12.5pt; color: #0f172a; font-weight: 800; }
  .title-bar p { margin: 2px 0 0; font-size: 8.3pt; color: #334155; }

  .grid-main { display: grid; grid-template-columns: 1.18fr 1fr; gap: 10px; }
  .card {
    border: 1px solid #cbd5e1; border-radius: 6px; padding: 8px 10px; background: #fff;
  }
  .card-title {
    font-size: 8pt; font-weight: 800; color: #1d4ed8; text-transform: uppercase;
    letter-spacing: 0.4px; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px; margin-bottom: 6px;
  }
  .details-col { display: flex; flex-direction: column; gap: 8px; }

  table { width: 100%; border-collapse: collapse; margin-top: 8px; font-size: 8.2pt; }
  th, td { border: 1px solid #cbd5e1; padding: 4.5px 7px; text-align: left; }
  th { background: #0f172a; color: #fff; font-weight: 700; font-size: 7.8pt; text-transform: uppercase; }
  tr:nth-child(even) td { background: #f8fafc; }
  td.k { font-weight: 700; color: #1e293b; width: 32%; }

  .notes {
    margin-top: 8px; padding: 7px 10px; background: #f8fafc; border: 1px solid #cbd5e1;
    border-radius: 5px; font-size: 7.8pt; color: #334155;
  }
  .notes strong { color: #0f172a; }
  .footer {
    margin-top: 8px; background: #0f172a; color: #e2e8f0; padding: 6px 12px;
    border-radius: 5px; display: flex; justify-content: space-between; font-size: 7.5pt;
  }
</style>
</head>
<body>
  <div class="header">
    <div class="header-left">
      ${logoB64 ? `<img src="${logoB64}" alt="Logo" />` : ''}
      <div>
        <div class="brand">ASTAS Y MANTENIMIENTO</div>
        <div class="brand-sub">Ingeniería, Fabricación y Mantenimiento de Astas Bandera · Chalco, Edo. Méx.</div>
      </div>
    </div>
    <div class="doc-box">
      <small>Ficha Técnica y Plano Esquemático</small>
      <strong>${m.codigo} · ${m.alturaM} (${m.alturaFt})</strong>
    </div>
  </div>

  <div class="title-bar">
    <h1>${m.titulo}</h1>
    <p>${m.subtitulo}</p>
  </div>

  <div class="grid-main">
    <!-- PLANO 1: ALZADO FRONTAL ACOTADO -->
    <div class="card">
      <div class="card-title">1. Alzado General y Secciones (Sin Escala · Cotas Referenciales)</div>
      <svg viewBox="0 0 360 365" width="100%" height="315" xmlns="http://www.w3.org/2000/svg" style="display:block;">
        <defs>
          <marker id="arr" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#1d4ed8"/>
          </marker>
        </defs>
        <!-- Fondo rejilla suave estilo plano -->
        <rect x="0" y="0" width="360" height="365" fill="#f8fafc" rx="4"/>
        <!-- Cota Altura Total -->
        <line x1="42" y1="26" x2="42" y2="305" stroke="#1d4ed8" stroke-width="1.2" marker-start="url(#arr)" marker-end="url(#arr)"/>
        <line x1="36" y1="26" x2="115" y2="26" stroke="#94a3b8" stroke-dasharray="3,2" stroke-width="0.8"/>
        <line x1="36" y1="305" x2="140" y2="305" stroke="#94a3b8" stroke-dasharray="3,2" stroke-width="0.8"/>
        <rect x="12" y="148" width="60" height="24" fill="#eff6ff" stroke="#1d4ed8" stroke-width="0.8" rx="3"/>
        <text x="42" y="159" text-anchor="middle" font-size="8.5" font-weight="800" fill="#1d4ed8">${m.alturaM}</text>
        <text x="42" y="169" text-anchor="middle" font-size="7" font-weight="700" fill="#334155">(${m.alturaFt} N.P.T.)</text>

        <!-- Bandera referencial -->
        <rect x="132" y="42" width="110" height="62" fill="#ffffff" stroke="#64748b" stroke-width="1"/>
        <rect x="132" y="42" width="36" height="62" fill="#16a34a" opacity="0.85"/>
        <rect x="206" y="42" width="36" height="62" fill="#dc2626" opacity="0.85"/>
        <circle cx="187" cy="73" r="8" fill="#a16207" opacity="0.75"/>
        <text x="187" y="116" text-anchor="middle" font-size="7" fill="#475569" font-weight="700">Bandera ${m.bandera.split('(')[0].trim()}</text>

        <!-- Esfera remate y aguilon -->
        <circle cx="122" cy="24" r="6.5" fill="#eab308" stroke="#854d0e" stroke-width="1.2"/>
        <line x1="114" y1="33" x2="132" y2="33" stroke="#0f172a" stroke-width="2.5"/>
        <circle cx="131" cy="36" r="3" fill="#475569"/>

        <!-- Fuste en 3 tramos escalonados -->
        <rect x="118.5" y="31" width="7" height="90" fill="#cbd5e1" stroke="#334155" stroke-width="1"/>
        <rect x="117" y="121" width="10" height="92" fill="#94a3b8" stroke="#334155" stroke-width="1"/>
        <rect x="115" y="213" width="14" height="92" fill="#64748b" stroke="#0f172a" stroke-width="1.2"/>

        <!-- Cable de izaje -->
        <line x1="131" y1="39" x2="131" y2="256" stroke="#334155" stroke-width="1" stroke-dasharray="2,1"/>
        <!-- Cornamusa / Matraca -->
        <rect x="129" y="252" width="8" height="10" fill="#1e293b" rx="1"/>
        <line x1="137" y1="257" x2="178" y2="257" stroke="#64748b" stroke-width="0.8"/>
        <text x="182" y="255" font-size="7.5" font-weight="700" fill="#0f172a">Matraca / Cornamusa</text>
        <text x="182" y="264" font-size="6.8" fill="#475569">Altura operación: ~1.30 m</text>

        <!-- Nivel de Piso Terminado (NPT) -->
        <line x1="78" y1="305" x2="175" y2="305" stroke="#0f172a" stroke-width="1.6"/>
        <text x="180" y="308" font-size="7.2" font-weight="800" fill="#0f172a">N.P.T. ±0.00 m</text>

        <!-- Placa base y cartabones -->
        <polygon points="115,293 107,303 115,303" fill="#334155"/>
        <polygon points="129,293 137,303 129,303" fill="#334155"/>
        <rect x="103" y="302" width="38" height="4" fill="#0f172a"/>

        <!-- Dado de cimentacion -->
        <rect x="92" y="306" width="60" height="46" fill="#e2e8f0" stroke="#475569" stroke-width="1.2"/>
        <!-- Pernos canastilla -->
        <path d="M 107 302 L 107 338 L 113 338" fill="none" stroke="#1d4ed8" stroke-width="1.6"/>
        <path d="M 137 302 L 137 338 L 131 338" fill="none" stroke="#1d4ed8" stroke-width="1.6"/>
        <text x="122" y="349" text-anchor="middle" font-size="6.8" font-weight="700" fill="#334155">Dado f'c 250 kg/cm²</text>

        <!-- Llamadas tecnicas derecha -->
        <line x1="129" y1="24" x2="180" y2="24" stroke="#64748b" stroke-width="0.8"/>
        <text x="184" y="22" font-size="7.5" font-weight="700" fill="#0f172a">Esfera Latonada + Aguilón</text>
        <text x="184" y="31" font-size="6.8" fill="#475569">Polea superior c/ rodamiento</text>

        <line x1="126" y1="155" x2="180" y2="155" stroke="#64748b" stroke-width="0.8"/>
        <text x="184" y="153" font-size="7.5" font-weight="700" fill="#0f172a">Fuste Escalonado Céd. 40</text>
        <text x="184" y="162" font-size="6.8" fill="#475569">Soldadura certificada AWS D1.1</text>

        <line x1="130" y1="213" x2="180" y2="213" stroke="#64748b" stroke-width="0.8"/>
        <text x="184" y="211" font-size="7.5" font-weight="700" fill="#0f172a">Unión Telescópica / Brida</text>
        <text x="184" y="220" font-size="6.8" fill="#475569">Permite envío por paquetería</text>

        <line x1="152" y1="328" x2="180" y2="328" stroke="#64748b" stroke-width="0.8"/>
        <text x="184" y="326" font-size="7.5" font-weight="700" fill="#0f172a">Canastilla de Anclaje</text>
        <text x="184" y="335" font-size="6.8" fill="#475569">${m.dado.split('·')[0].trim()}</text>
      </svg>
    </div>

    <!-- DETALLES CONSTRUCTIVOS -->
    <div class="details-col">
      <!-- PLANO 2: PLACA BASE VISTA SUPERIOR -->
      <div class="card">
        <div class="card-title">2. Detalle A — Placa Base y Cartabones (Planta)</div>
        <svg viewBox="0 0 280 128" width="100%" height="118" xmlns="http://www.w3.org/2000/svg" style="display:block;">
          <rect x="0" y="0" width="280" height="128" fill="#f8fafc" rx="4"/>
          <rect x="24" y="16" width="88" height="88" fill="#cbd5e1" stroke="#0f172a" stroke-width="1.5" rx="3"/>
          <!-- 4 barrenos -->
          <circle cx="38" cy="30" r="4.5" fill="#fff" stroke="#1d4ed8" stroke-width="1.5"/>
          <circle cx="98" cy="30" r="4.5" fill="#fff" stroke="#1d4ed8" stroke-width="1.5"/>
          <circle cx="38" cy="90" r="4.5" fill="#fff" stroke="#1d4ed8" stroke-width="1.5"/>
          <circle cx="98" cy="90" r="4.5" fill="#fff" stroke="#1d4ed8" stroke-width="1.5"/>
          <!-- Tubo base + 4 cartabones -->
          <circle cx="68" cy="60" r="18" fill="#64748b" stroke="#0f172a" stroke-width="1.5"/>
          <circle cx="68" cy="60" r="12" fill="#f8fafc" stroke="#334155" stroke-width="1"/>
          <rect x="66" y="28" width="4" height="14" fill="#0f172a"/>
          <rect x="66" y="78" width="4" height="14" fill="#0f172a"/>
          <rect x="36" y="58" width="14" height="4" fill="#0f172a"/>
          <rect x="86" y="58" width="14" height="4" fill="#0f172a"/>
          <!-- Cotas texto -->
          <text x="68" y="117" text-anchor="middle" font-size="7.5" font-weight="800" fill="#1d4ed8">${m.placaBase.split('·')[0].trim()}</text>
          <text x="128" y="34" font-size="7.5" font-weight="700" fill="#0f172a">• Placa acero ASTM A36</text>
          <text x="128" y="48" font-size="7.2" fill="#334155">${m.placaBase.split('·')[1]?.trim() || 'Espesor estructural'}</text>
          <text x="128" y="64" font-size="7.5" font-weight="700" fill="#0f172a">• 4 Cartabones de refuerzo</text>
          <text x="128" y="78" font-size="7.2" fill="#334155">Soldados a fuste y placa</text>
          <text x="128" y="94" font-size="7.5" font-weight="700" fill="#0f172a">• 4 Barrenos para anclas</text>
          <text x="128" y="106" font-size="7.2" fill="#334155">Con doble tuerca niveladora</text>
        </svg>
      </div>

      <!-- PLANO 3: CIMENTACION Y CANASTILLA -->
      <div class="card">
        <div class="card-title">3. Detalle B — Dado de Cimentación y Canastilla</div>
        <svg viewBox="0 0 280 155" width="100%" height="145" xmlns="http://www.w3.org/2000/svg" style="display:block;">
          <rect x="0" y="0" width="280" height="155" fill="#f8fafc" rx="4"/>
          <!-- Tierra / N.P.T -->
          <line x1="12" y1="38" x2="132" y2="38" stroke="#0f172a" stroke-width="1.5"/>
          <rect x="34" y="38" width="76" height="96" fill="#e2e8f0" stroke="#475569" stroke-width="1.4"/>
          <!-- Armado acero -->
          <rect x="42" y="46" width="60" height="80" fill="none" stroke="#94a3b8" stroke-dasharray="4,2" stroke-width="1"/>
          <!-- Anclas -->
          <path d="M 52 24 L 52 110 L 62 110" fill="none" stroke="#1d4ed8" stroke-width="2"/>
          <path d="M 92 24 L 92 110 L 82 110" fill="none" stroke="#1d4ed8" stroke-width="2"/>
          <rect x="46" y="30" width="52" height="4" fill="#0f172a"/>
          <text x="72" y="147" text-anchor="middle" font-size="7.5" font-weight="800" fill="#1d4ed8">${m.dado.split('·')[0].trim()}</text>

          <text x="142" y="34" font-size="7.5" font-weight="700" fill="#0f172a">• Concreto f'c = 250 kg/cm²</text>
          <text x="142" y="50" font-size="7.2" fill="#334155">Dado: ${m.dado.split('·')[0].trim()}</text>
          <text x="142" y="66" font-size="7.5" font-weight="700" fill="#0f172a">• Canastilla de anclaje</text>
          <text x="142" y="79" font-size="7.2" fill="#334155">${m.anclas.split('(')[0].trim()}</text>
          <text x="142" y="96" font-size="7.5" font-weight="700" fill="#0f172a">• Fraguado obligatorio</text>
          <text x="142" y="109" font-size="7.2" fill="#334155">Mínimo 7 días antes de montar</text>
          <text x="142" y="126" font-size="7.2" fill="#1d4ed8" font-weight="700">Incluye plantilla guía para obra</text>
        </svg>
      </div>
    </div>
  </div>

  <!-- TABLA DE ESPECIFICACIONES TÉCNICAS -->
  <table>
    <thead>
      <tr>
        <th colspan="2">Especificaciones Técnicas Generales — Modelo ${m.codigo}</th>
      </tr>
    </thead>
    <tbody>
      <tr><td class="k">Altura Total Nominal</td><td>${m.alturaM} (${m.alturaFt}) sobre Nivel de Piso Terminado (N.P.T.)</td></tr>
      <tr><td class="k">Material y Norma</td><td>Tubería de Acero al Carbón Cédula 40 (ASTM A53 / A36) · Soldadura certificada AWS D1.1</td></tr>
      <tr><td class="k">Configuración de Fuste</td><td>${m.diametros} · ${m.tramos}</td></tr>
      <tr><td class="k">Placa Base y Anclaje</td><td>${m.placaBase} · ${m.anclas}</td></tr>
      <tr><td class="k">Cimentación Recomendada</td><td>${m.dado}</td></tr>
      <tr><td class="k">Sistema de Izaje y Remate</td><td>${m.cable} · Aguilón giratorio y esfera de remate latonada · Matraca o cornamusa</td></tr>
      <tr><td class="k">Acabado y Protección</td><td>Primario anticorrosivo + esmalte industrial (o sistema epóxico + poliuretano UV opcional) en color a elegir</td></tr>
      <tr><td class="k">Bandera Recomendada / Peso</td><td>${m.bandera} · Peso aprox.: ${m.pesoAprox}</td></tr>
      <tr><td class="k">Resistencia al Viento</td><td>${m.viento}</td></tr>
    </tbody>
  </table>

  <div class="notes">
    <strong>Notas de Ingeniería y Logística:</strong> Las cotas de cimentación son referenciales para terreno firme estándar (capacidad de carga ≥ 10 ton/m²); para suelos blandos o zonas ciclónicas se ajusta memoria de cálculo. El diseño en tramos ensamblables permite envío económico por paquetería nacional (ej. Tresguerras) a cualquier estado de la República. Garantía estructural de 12 meses contra defectos de fabricación.
  </div>

  <div class="footer">
    <span><strong>Astas y Mantenimiento</strong> · Chalco, Estado de México</span>
    <span>Tel / WhatsApp: 56-6004-0372 · astasymantenimiento@gmail.com · https://astasymantenimiento.com</span>
  </div>
</body>
</html>`;
}

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
try {
  for (const m of modelos) {
    const page = await browser.newPage();
    await page.setContent(renderHTML(m), { waitUntil: 'networkidle0' });
    const pdfPath = path.join(outDir, m.archivo);
    await page.pdf({
      path: pdfPath,
      format: 'Letter',
      printBackground: true,
      margin: { top: '8mm', right: '8mm', bottom: '8mm', left: '8mm' },
    });
    await page.close();
    console.log('Generado:', pdfPath);
  }
} finally {
  await browser.close();
}
