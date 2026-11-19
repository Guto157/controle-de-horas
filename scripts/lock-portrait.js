const fs = require('fs');
const path = require('path');

const manifestPath = path.join('android', 'app', 'src', 'main', 'AndroidManifest.xml');
if (!fs.existsSync(manifestPath)) {
  throw new Error('AndroidManifest.xml não encontrado: ' + manifestPath);
}

let manifest = fs.readFileSync(manifestPath, 'utf8');
const activityPattern = /<activity(?=[^>]*android:name="[^"]*MainActivity")[^>]*>/;
const match = manifest.match(activityPattern);
if (!match) {
  throw new Error('Não foi possível localizar a atividade MainActivity no AndroidManifest.xml.');
}

let activityTag = match[0];
if (/android:screenOrientation="[^"]*"/.test(activityTag)) {
  activityTag = activityTag.replace(/android:screenOrientation="[^"]*"/, 'android:screenOrientation="portrait"');
} else {
  activityTag = activityTag.replace(/>$/, ' android:screenOrientation="portrait">');
}
manifest = manifest.replace(activityPattern, activityTag);
fs.writeFileSync(manifestPath, manifest, 'utf8');
console.log('Orientação da tela bloqueada em modo retrato.');
