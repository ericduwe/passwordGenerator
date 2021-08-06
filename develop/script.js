// Assignment Code
var generateBtn = document.querySelector("#generate");

let passwordLength = prompt("Password Length (8-128 characters)?")

let includeLowercase = confirm("Include lowercase?")
let includeUppercase = confirm("Include uppercase?")
let includeNumbers = confirm("Include numbers?")
let includeSpecial = confirm("Include special characters?")

let lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let listNumbers = "1234567890".split("");
let special = "~`! @#$%^&*()_-+={[}]|\:;'<,>.?/".split("");
let chosenArray = []

function generatePassword(){
  if (includeLowercase) {
    chosenArray = [...lowercase];
    
    
  };

  if (includeUppercase) {
    chosenArray = [...chosenArray, ...uppercase];
    
  };

 if (includeNumbers) {
    chosenArray = [...chosenArray, ...listNumbers];
    
  };

  if (includeSpecial) {
    chosenArray = [...chosenArray, ...special];

  };

  
  var passwordArray = [];

  for (let i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random()*chosenArray.length);
    passwordArray.push(chosenArray[randomNumber]);

  }
  
  passwordArray.join();

  return passwordArray

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);