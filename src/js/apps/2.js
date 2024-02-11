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

const checkCases = finalStr => {
  if (isLowerCase.checked && !isUpperCase.checked) {
    return finalStr.toLowerCase();
  }
  if (!isLowerCase.checked && isUpperCase.checked) {
    return finalStr.toUpperCase();
  }
  return finalStr;
};

const generateRules = () => {
  let finalStr = startStr;
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
  rules.forEach(option => {
    if (option.isNeeded) {
      finalStr += option.str;
    }
  });
  return checkCases(finalStr);
};

const createPassword = () => {
  const str = generateRules();
  let password = '';
  for (let i = 0; i < passwordLength.value; i++) {
    password += str.charAt(Math.floor(Math.random() * str.length));
  }
  passwordContainer.textContent = password;
};

const copyPassword = () => {
  navigator.clipboard.writeText(passwordContainer.textContent).then(() => {
    successCopyLabel.classList.add('active');
    setTimeout(() => {
      successCopyLabel.classList.remove('active');
    }, 2000);
  });
};

generatePasswordBtn.addEventListener('click', createPassword);
copyPasswordBtn.addEventListener('click', copyPassword);
createPassword();
