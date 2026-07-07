import * as esbuild from 'esbuild';
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const standalone = resolve(root, 'standalone');

rmSync(standalone, { recursive: true, force: true });
mkdirSync(resolve(standalone, 'assets'), { recursive: true });

await esbuild.build({
  entryPoints: [resolve(root, 'src/main.jsx')],
  bundle: true,
  format: 'iife',
  target: 'es2018',
  minify: true,
  outfile: resolve(standalone, 'assets/app.js'),
  loader: { '.css': 'css' },
  logLevel: 'info',
});

cpSync(resolve(root, 'public/assets/images'), resolve(standalone, 'assets/images'), { recursive: true });
cpSync(resolve(root, 'public/assets/icons'), resolve(standalone, 'assets/icons'), { recursive: true });
for (const file of ['CNAME', 'robots.txt', 'sitemap.xml', 'site.webmanifest']) {
  cpSync(resolve(root, 'public', file), resolve(standalone, file));
}

const sourceHtml = readFileSync(resolve(root, 'index.html'), 'utf8');
const standaloneHtml = sourceHtml
  .replace('<link rel="manifest" href="./site.webmanifest" />', '<link rel="manifest" href="./site.webmanifest" />\n    <link rel="stylesheet" href="./assets/app.css" />')
  .replace('<script type="module" src="/src/main.jsx"></script>', '<script src="./assets/app.js"></script>');

writeFileSync(resolve(standalone, 'index.html'), standaloneHtml);
