const fs = require('fs');
const path = require('path');

const replacements = [
  ['#2C5F9F', '#1d336c'],
  ['#2c5f9f', '#1d336c'],
  ['#1e4a80', '#141f45'],
  ['#4a7fc1', '#2e4d8a'],
  ['#D65A20', '#c49a43'],
  ['#d65a20', '#c49a43'],
  ['#B54512', '#a67e2e'],
  ['#b54512', '#a67e2e'],
  ['#F28652', '#d4b060'],
  ['#f28652', '#d4b060'],
  ['#E87D3E', '#d4b060'],
  ['#5CA084', '#3a7ca5'],
  ['#5ca084', '#3a7ca5'],
  ['#45846a', '#2d6080'],
  ['#7bbda0', '#5a9bc0'],
  ['#7ec8a8', '#5a9bc0'],
  ['#1A1A2E', '#0e1a38'],
  ['#1a1a2e', '#0e1a38'],
  ['#2d2d45', '#1a2850'],
  ['#F7F5F2', '#f0f2f7'],
  ['#f7f5f2', '#f0f2f7'],
  ['#ede9e3', '#e2e6f0'],
  ['#0f0f23', '#080e24'],
  ['#16213E', '#0e1a38'],
  ['#c24e18', '#a67e2e'],
  ['#192340', '#152952'],
  ['#203f61', '#1d336c'],
  ['rgba(44, 95, 159', 'rgba(29, 51, 108'],
  ['rgba(92, 160, 132', 'rgba(58, 124, 165'],
  ['rgba(214, 90, 32', 'rgba(196, 154, 67'],
  ['rgba(232, 125, 62', 'rgba(212, 176, 96'],
  ['rgba(26, 26, 46', 'rgba(14, 26, 56'],
  ['rgba(74, 127, 193', 'rgba(46, 77, 138'],
];

const cssFiles = [
  'app/page.module.css',
  'app/service.module.css',
  'app/contacto/contacto.module.css',
  'app/faq/faq.module.css',
  'app/sobre-maria/sobreMaria.module.css',
  'app/testimonios/testimonios.module.css',
  'app/components/Header.module.css',
  'app/components/Footer.module.css',
  'app/components/FloatingWidgets.module.css',
  'app/components/LeadMagnetForm.module.css',
  'app/components/LoadingScreen.module.css',
  'app/components/LogoCarousel.module.css',
  'app/components/VideoTestimonial.module.css',
  'app/admin/(dashboard)/admin-dashboard.module.css',
  'app/admin/(dashboard)/analytics/analytics.module.css',
  'app/admin/(dashboard)/campaigns/campaigns.module.css',
  'app/admin/(dashboard)/content/content.module.css',
  'app/admin/(dashboard)/leads/leads.module.css',
  'app/admin/login/admin-login.module.css',
];

const basePath = 'c:/Users/benja/Elevare Consulting';
let totalChanges = 0;

for (const file of cssFiles) {
  const fullPath = path.join(basePath, file);
  if (!fs.existsSync(fullPath)) {
    console.log('SKIP:', file);
    continue;
  }
  let content = fs.readFileSync(fullPath, 'utf8');
  let changes = 0;
  for (const [from, to] of replacements) {
    while (content.includes(from)) {
      content = content.replace(from, to);
      changes++;
    }
  }
  if (changes > 0) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log('OK:', file, '(' + changes + ' cambios)');
    totalChanges += changes;
  }
}
console.log('\nTOTAL:', totalChanges, 'cambios en', cssFiles.length, 'archivos');
