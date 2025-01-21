const qrcode = require('qrcode-terminal');

// L'URL de votre application (à remplacer par l'URL réelle une fois déployée)
const appUrl = 'https://civino.app';

// Générer le QR code
qrcode.generate(appUrl, {small: true}, function (qrcode) {
    console.log('\nScannez ce QR code pour accéder à l'application CIVINO:\n');
    console.log(qrcode);
});
