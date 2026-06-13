import { execSync } from 'node:child_process';
import { existsSync, readdirSync, rmSync } from 'node:fs';

process.env.ASTRO_DEPLOY = 'cloudflare';

console.log('Building GIE site for Cloudflare Pages (root base path)...');

execSync('astro build', { stdio: 'inherit', env: process.env });

// Static site only — drop worker output if present
if (existsSync('dist/_worker.js')) {
  rmSync('dist/_worker.js', { recursive: true, force: true });
  console.log('Removed dist/_worker.js (not used for static Pages deploy).');
}

const indexPath = 'dist/index.html';

if (!existsSync(indexPath)) {
  console.error('Build failed: dist/index.html was not created.');
  console.error('dist contents:', existsSync('dist') ? readdirSync('dist') : '(missing)');
  process.exit(1);
}

console.log('Cloudflare build OK:', indexPath);
console.log('dist contents:', readdirSync('dist').join(', '));
