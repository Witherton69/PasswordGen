// PASSWORD GENERATOR

function randomIndex(str){
    return Math.floor(Math.random() * str.length);
  }
  
  
  console.log(randomIndex(`Chicken`)); 
  
  function getRandomLower(){
    const letters = `abcdefghijklmnopqrstuvwxyz`;

    return letters[randomIndex(letters)];
  }
 
  console.log(getRandomLower()); 

  function getRandomUpper(){
 
    return getRandomLower().toUpperCase();
  }

  console.log(getRandomUpper());
  
  function getRandomNumber(){
    const numbers = `1234567890`;
    return numbers[randomIndex(numbers)];
  }
  
  console.log(getRandomNumber()); 
  
  function getRandomSymbol(){
    const symbols = `!@#$%^&*(){}[]=<>/,.`;
    return symbols[randomIndex(symbols)];
  }
  
  console.log(getRandomSymbol()); 
 
  const randomFunctions = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
  };
  
  const resultEl = document.querySelector(`#result`);
  const clipboardEl = document.querySelector(`#clipboard`);
  const lowercaseEl = document.querySelector(`#lowercase`);
  const uppercaseEl = document.querySelector(`#uppercase`);
  const numbersEl = document.querySelector(`#numbers`);
  const symbolsEl = document.querySelector(`#symbols`);
  const lengthEl = document.querySelector(`#length`);
  const generateEl = document.querySelector(`#generate`);
  
  function generatePassword(lower, upper, number, symbol, length){
    console.log(lower, upper, number, symbol, length);
  
    // 1. CREATE THE PASSWORD VARIABLE
    let generatedPassword = ``;
  
    // 2. FILTER OUT UNCHECKED OPTIONS
    const typesCount = lower + upper + number + symbol;
    console.log(typesCount);

    if (typesCount === 0){
      alert(`Please select an option`);
      return ``;
    }
  
    let typesArr = [
      [`lower`, lower],
      [`upper`, upper],
      [`number`, number],
      [`symbol`, symbol],
    ];
    console.log(typesArr);

    typesArr = typesArr.filter(item => {
      console.log(item[1]);
      return item[1];
    });
    console.log(typesArr);
  
    // 3. LOOP OVER THE LENGTH AND CALL THE GENERATOR FUNCTION FOR EACH CHECKED OPTION
    for (i = 0; i < length; i += typesCount){

      typesArr.forEach(type => {
        const funcName = type[0];
        console.log(funcName);
  
        generatedPassword += randomFunctions[funcName]();
        console.log(generatedPassword);
      });
    }
  
    const finalPassword = generatedPassword.slice(0, length);
    console.log(finalPassword);
  
    return finalPassword;
  }

  generateEl.addEventListener(`click`, () => {

    const hasLower = lowercaseEl.checked;
    console.log(lowercaseEl.checked);
    const hasUpper = uppercaseEl.checked;
    console.log(uppercaseEl.checked);
    const hasNumber = numbersEl.checked;
    console.log(numbersEl.checked);
    const hasSymbol = symbolsEl.checked;
    console.log(symbolsEl.checked);

    const length = parseInt(lengthEl.value);
    console.log(lengthEl.value);
  
    console.log(hasLower, hasUpper, hasNumber, hasSymbol, length);

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
  });
  
  clipboardEl.addEventListener(`click`, () => {
 
    const password = resultEl.innerText;

    if (password.length === 0){
      alert(`Please generate a password first`);
      return;
    }

    navigator.clipboard.writeText(password);
    console.log(navigator);
  });