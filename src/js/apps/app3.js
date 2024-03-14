import QRCode from 'qrcode';

export default class {
  constructor(appId) {
    this.app = document.getElementById(appId);
    this.container = document.querySelector('#qr img');
    this.download = document.querySelector('#download');
    this.inputField = document.querySelector('#input-field');
  }

  init() {
    if (this.app && this.container && this.download && this.inputField) {
      this.initListeners();
      this.generateQRCode();
    }
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
