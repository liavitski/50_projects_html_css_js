const passwordEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateBtn = document.getElementById('generate-btn');
const clipboardBtn = document.getElementById('clipboard-btn');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

generateBtn.addEventListener('click', () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  passwordEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = '';
  const typesCount = lower + upper + number + symbol;
  const typesArr = [
    { lower },
    { upper },
    { number },
    { symbol },
  ].filter((item) => Object.values(item)[0]);

  const randomisedTypesArr = shuffleArray(typesArr);

  console.log(randomisedTypesArr);
  if (typesCount === 0) {
    return '';
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>,.?';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
