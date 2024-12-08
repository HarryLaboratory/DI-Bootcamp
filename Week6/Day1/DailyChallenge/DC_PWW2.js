// 2nd DC

const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;
  
  function toJs() {
    return new Promise((resolve, reject) => {
      const morseObject = JSON.parse(morse); 
      if (Object.keys(morseObject).length === 0) {
        reject("Morse object is empty!");
      } else {
        resolve(morseObject);
      }
    });
  }
  
  function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
      const userInput = document.getElementById('user-input').value.toLowerCase();
      const morseTranslation = [];
      
      for (let i = 0; i < userInput.length; i++) {
        const char = userInput[i];
        
        if (morseJS[char]) {
          morseTranslation.push(morseJS[char]);
        } else {
          reject(`The character "${char}" does not exist in the Morse code dictionary.`);
          return;
        }
      }
      
      resolve(morseTranslation); 
    });
  }
  
  function joinWords(morseTranslation) {
    const morseString = morseTranslation.join("\n");
    const morseContainer = document.getElementById('morse-output');  
    morseContainer.textContent = morseString; 
  }
  
  function startConversion() {
    toJs() 
      .then((morseJS) => {
        return toMorse(morseJS); 
      })
      .then((morseTranslation) => {
        joinWords(morseTranslation); 
      })
      .catch((error) => {
        alert(error); 
      });
  }
  