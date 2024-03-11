import QRCode from 'qrcode';

export default class {
  constructor() {
    this.container = document.querySelector('#qr img');
    this.download = document.getElementById('download');
    this.inputField = document.getElementById('input-field');
    this.initListeners();
    this.generateQRCode();
  }

  generateQRCode() {
    const { value } = this.inputField;
    const options = {
      errorCorrectionLevel: 'H',
      type: 'image/jpeg',
      quality: 0.1,
      margin: 1,
      color: {
        dark: '#000',
        light: '#fff',
      },
    };
    QRCode.toDataURL(value || 'https://www.google.com.ua/', options)
      .then(url => {
        console.log(url);
        this.container.src = url;
        this.download.href = url;
      })
      .catch(err => {
        console.error(err);
      });
  }

  initListeners() {
    this.inputField.addEventListener('input', () => {
      this.generateQRCode();
    });
  }
}
