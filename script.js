// Assignment code here

document.querySelector("#generate").addEventListener("click", writePassword);


//STEP ONE SET UP VERIABLES 
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var letterUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var letterLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "?", "<", ">", "{", "?", "}", "/"];

/// STUFF TO DECIDE FROM USE 
var confirmLength = "";
var confirmLetterUpper;
var confirmLetterLower;
var confirmSpecial;
var confirmNumber;

function generate() {
  //ASK LENGTH
  var confirmLength =
    window.prompt("How long would you like you password to be, Please type a number 8-128.");
  //if not in range loop
  if (confirmLength <= 8 || confirmLength >= 128) {
    window.alert("between 8 and 128 please")
    var confirmLength = window.prompt("How long would you like you password to be, Please pick a number 8-128.");
  }

  //CONFIRM WHAT THEY WANT OK OR CANCEL
  var confirmNumber = window.confirm("Numbers?");
  var confirmLetterUpper = window.confirm("Upper case letters?");
  var confirmLetterLower = window.confirm("Lower case letters?");
  var confirmSpecial = window.confirm("Special Character?");

  //if nothing picked
   
if (confirmNumber === false && confirmLetterUpper === false && confirmLetterLower === false  && confirmSpecial === false) {
  window.alert ("You have to pick somthing for me to work with!");
  var confirmNumber = window.confirm ("Numbers?");
  var confirmLetterUpper = window.confirm("Upper case letters?");
  var confirmLetterLower = window.confirm("Lower case letters?");
  var confirmSpecial = window.confirm("Special Character?");
}

var passwordIs = []; 
{
  if (confirmNumber) {
    passwordIs = confirmLength.concat(number)
  }
  if (confirmLetterUpper){
  passwordIs = confirmLength.concat(letterUpper)
}
  if (confirmLetterLower) {
  passwordIs =  confirmLength.concat(letterLower)
}
  if (confirmSpecial) {
    passwordIs = confirmLength.concat(special)
  }
  
}

console.log(passwordIs)

var randomPassword = ""

for (var i = 0; i < confirmLength; i++) {
 randomPassword = randomPassword + passwordIs[Math.floor(Math.random() * passwordIs.length)];
 console.log(randomPassword);
}
return randomPassword;

};

generate();

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.textContent = randomPassword

  passwordText.value = password;
  var password = generate();
  var passwordText = document.querySelector( "#password")


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
