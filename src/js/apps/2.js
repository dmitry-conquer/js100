const generatePasswordBtn = document.getElementById('generate-password');
const copyPasswordBtn = document.getElementById('copy-password');
const passwordLength = document.getElementById('length');
const isLowerCase = document.getElementById('lowecase');
const isUpperCase = document.getElementById('uppercase');
const containsSymbols = document.getElementById('symbols');
const containsSpace = document.getElementById('space');
const containsNumbers = document.getElementById('numbers');
const passwordContainer = document.getElementById('password-container');
const successCopyLabel = document.getElementById('success-copy');

const startStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

const generateRules = () => {
  const rules = [
    {
      isNeeded: containsSymbols.checked,
      str: '!-$^+:?{}[]#@',
    },
    {
      isNeeded: containsSpace.checked,
      str: '      ',
    },
    {
      isNeeded: containsNumbers.checked,
      str: '0123456789',
    },
  ];
  let newStr = startStr;
  let finalStr = '';
  rules.forEach(option => {
    if (option.isNeeded) {
      newStr += option.str;
    }
  });

  if (isLowerCase.checked && isUpperCase.checked) {
    finalStr = newStr;
  } else if (isLowerCase.checked && !isUpperCase.checked) {
    finalStr = newStr.toLowerCase();
  } else {
    finalStr = newStr.toUpperCase();
  }
  return finalStr;
};

const createPassword = () => {
  const str = generateRules();
  let password = '';
  for (let i = 0; i < passwordLength.value; i++) {
    password += str.charAt(Math.floor(Math.random() * str.length));
    passwordContainer.textContent = password;
  }
};

generatePasswordBtn.addEventListener('click', () => {
  createPassword();
});

copyPasswordBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(passwordContainer.textContent).then(() => {
    successCopyLabel.classList.add('active');
    setTimeout(() => {
      successCopyLabel.classList.remove('active');
    }, 2000);
  });
});

createPassword();
