import { mkdir, writeFile, readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const buildDir = path.resolve(__dirname, '../build');
const SITE_URL = 'https://astasymantenimiento.com';

const routes = [
  '/',
  '/mantenimiento-astas-bandera',
  '/fabricacion-astas-bandera-mexico',
  '/astas-monumentales',
  '/astas-escritorio',
  '/banderas-reglamentarias',
  '/reparacion-astas-bandera',
  '/pintura-astas-bandera',
];

const HOME_TITLE = 'Astas y Mantenimiento | Fabricación e Instalación de Astas Monumentales';
const HOME_DESC = /Expertos en fabricaci[oó]n, instalaci[oó]n y mantenimiento de astas banderas monumentales en el Estado de M[eé]xico/;

function ensurePageTitle(html) {
  const existing = html.match(/<title>([^<]+)<\/title>/);
  if (existing) return html;
  // No hay title → derivar del og:title de la página (el correcto)
  const ogTitle = html.match(/<meta\s+property="og:title"\s+content="([^"]+)"[^>]*>/i);
  if (ogTitle) {
    return html.replace('</head>', `<title>${ogTitle[1]}</title></head>`);
  }
  return html;
}

function cleanDuplicateHeadTags(html, route) {
  const canonicalUrl = route === '/' ? SITE_URL : `${SITE_URL}${route}`;
  const isHome = route === '/';
  let headEnd = html.indexOf('</head>');
  let head = html.slice(0, headEnd);
  const rest = html.slice(headEnd);

  // En páginas internas, eliminar las entradas del HOME duplicadas por Helmet
  if (!isHome) {
    // quitar <title> del home (queda el de la página)
    head = head.replace(new RegExp(`<title>${HOME_TITLE.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')}</title>`, 'g'), '');
    // quitar og:title del home
    head = head.replace(new RegExp(`<meta[^>]*property="og:title"[^>]*content="${HOME_TITLE.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')}"[^>]*>`, 'gi'), '');
    head = head.replace(new RegExp(`<meta[^>]*property="og:title"[^>]*content="${HOME_TITLE.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')}"[^>]*>`, 'gi'), '');
    // quitar description del home
    head = head.replace(/<meta\s+name="description"\s+content="Expertos en fabricaci[oó]n, instalaci[oó]n y mantenimiento de astas banderas monumentales en el Estado de M[eé]xico[^"]*"[^>]*>/gi, '');
    // quitar og:description del home
    head = head.replace(/<meta\s+property="og:description"\s+content="[^"]*fabricaci[oó]n, instalaci[oó]n y mantenimiento de astas banderas monumentales en el Estado de M[eé]xico[^"]*"[^>]*>/gi, '');
    // quitar og:image:alt del home
    head = head.replace(/<meta\s+property="og:image:alt"\s+content="[^"]*Astas y Mantenimiento[^"]*Fabricaci[oó]n e instalaci[oó]n de astas monumentales en M[eé]xico"[^>]*>/gi, '');
    // quitar twitter:description del home
    head = head.replace(/<meta\s+name="twitter:description"\s+content="[^"]*Fabricaci[oó]n, instalaci[oó]n y mantenimiento de astas banderas monumentales[^"]*"[^>]*>/gi, '');
    // quitar twitter:image:alt del home
    head = head.replace(/<meta\s+name="twitter:image:alt"\s+content="[^"]*Astas y Mantenimiento[^"]*Astas monumentales en M[eé]xico"[^>]*>/gi, '');
    // quitar canonical/og:url/hreflang del home (sin ruta)
    head = head.replace(/<meta\s+property="og:url"\s+content="https:\/\/astasymantenimiento\.com"[^>]*>/gi, '');
    head = head.replace(/<link\s+rel="canonical"\s+href="https:\/\/astasymantenimiento\.com"[^>]*>/gi, '');
    head = head.replace(/<link\s+rel="alternate"\s+hreflang="[^"]*"\s+href="https:\/\/astasymantenimiento\.com"[^>]*>/gi, '');
    head = head.replace(/<link\s+rel="alternate"\s+hreflang="[^"]*"\s+href="https:\/\/astasymantenimiento\.com\/"[^>]*>/gi, '');
    // quitar twitter:title / og:image alt del home
    head = head.replace(new RegExp(`<meta[^>]*name="twitter:title"[^>]*content="${HOME_TITLE.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')}"[^>]*>`, 'gi'), '');
    head = head.replace(new RegExp(`<meta[^>]*content="${HOME_TITLE.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')}"[^>]*og:image:alt[^>]*>`, 'gi'), '');
  }

  return head + rest;
}

async function prerender() {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-web-security',
      '--disable-features=VizDisplayCompositor',
    ],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 });

  await page.setRequestInterception(true);
  page.on('request', req => {
    const url = req.url();
    if (url.startsWith('http://127.0.0.1') || url.startsWith('file:///')) {
      req.continue();
    } else {
      req.abort();
    }
  });

  console.log('🚀 Iniciando prerender...');

  for (const route of routes) {
    console.log(`  ⏳ ${route} ...`);

    try {
      await page.goto(`http://127.0.0.1:3456${route}`, {
        waitUntil: 'domcontentloaded',
        timeout: 15000,
      });
      await new Promise(r => setTimeout(r, 2500));

      let html = await page.content();

      // Limpiar tags duplicados y asegurar canonical correcto
      html = cleanDuplicateHeadTags(html, route);

      // Si no quedó <title> de la página, derivarlo del og:title de la página
      html = ensurePageTitle(html);

      const title = html.match(/<title>([^<]+)<\/title>/)?.[1] || '(sin título)';
      const canonical = html.match(/rel="canonical" href="([^"]+)"/)?.[1] || '(sin canonical)';

      if (route === '/') {
        await writeFile(path.join(buildDir, 'index.html'), html);
      } else {
        const routeDir = path.join(buildDir, route);
        await mkdir(routeDir, { recursive: true });
        await writeFile(path.join(routeDir, 'index.html'), html);
      }
      console.log(`  ✅ ${route}`);
      console.log(`     Title: "${title}"`);
      console.log(`     Canonical: ${canonical}`);
    } catch (e) {
      console.error(`  ❌ ${route}: ${e.message}`);
    }
  }

  await browser.close();
  console.log('✨ Prerender completo:', routes.length, 'rutas');
}

import http from 'http';

const MIME = {
  '.html': 'text/html', '.js': 'application/javascript',
  '.css': 'text/css', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml', '.json': 'application/json',
};

function startServer(dir) {
  return new Promise(resolve => {
    const server = http.createServer(async (req, res) => {
      let url = req.url.split('?')[0];
      if (url === '/') url = '/index.html';
      const filePath = path.join(dir, url);
      try {
        const content = await readFile(filePath);
        const ext = path.extname(url);
        res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
        res.end(content);
      } catch {
        try {
          const content = await readFile(path.join(dir, 'index.html'));
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content);
        } catch {
          res.writeHead(404);
          res.end('Not found');
        }
      }
    });
    server.listen(3456, '127.0.0.1', () => resolve(server));
  });
}

async function main() {
  const server = await startServer(buildDir);
  try {
    await prerender();
  } finally {
    server.close();
  }
}

main().catch(e => {
  console.error('❌ Error:', e);
  process.exit(1);
});