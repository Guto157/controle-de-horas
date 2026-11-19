const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const output = path.join(root, 'www');
const source = path.join(root, 'index.html');

fs.mkdirSync(output, { recursive: true });
fs.copyFileSync(source, path.join(output, 'index.html'));

console.log('Versão web preparada em www/.');
