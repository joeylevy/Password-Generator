// Assignment code here

document.querySelector("#generate").addEventListener("click", writePassword);


//STEP ONE SET UP VERIABLES
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var letterUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var letterLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "?", "<", ">", "{", "?", "}", "/"];

/// STUFF TO DECIDE FROM USE


function generate() {
    //ASK LENGTH
    var passwordLength = confirmPasswordLength();
    //this is more human readable way to work.
    //At the bottom of this page,
    //there is a function called getPasswordLength
    //that returns the valid length once one is entered.

    //ask for character options
    var allowedCharacters = confirmAllowedCharacters();
    //at the bottom is a function called confirmAllowedCharacters()
    // //that does all the work and just provides the character array
    //this makes it is easier to read the main function


    var randomPassword = createPassword(passwordLength, allowedCharacters);
    //any complex task should be done in a discreet function if possible.
    //In this case, creating the password makes sense to run separately
    //this one is different, because the function accepts the password length and character array
    //and then returns the final password


    return randomPassword;
}

generate();

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    //not sure about this part and I never ran the code
    // var password = generatePassword();
    // var passwordText = document.querySelector("#password");
    var generatedPassword = generate();
    var passwordText = document.querySelector("#password")
    passwordText.textContent = generatedPassword

    passwordText.value = generatedPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// FUNCTIONS for Generate
function confirmPasswordLength() {

    while (true) { //loop until a valid number is created
        var passwordLength = window.prompt("How long would you like you password to be, Please type a number 8-128.");

//if in range loop
        if ((passwordLength >= 8) && (passwordLength <= 128)) { //added more pranthesis and changed to && from ||
            console.log('aha!', passwordLength);   //just writes a message to the console so that you can see that you made it to this spot.
            return passwordLength;
        } else {
            window.alert("between 8 and 128 please")
        }
    }
}


function confirmAllowedCharacters() {

    while (true) { //loop until a valid number is created
        //CONFIRM WHAT THEY WANT OK OR CANCEL
        var useNumbers = window.confirm("Numbers?");
        var UseUppers = window.confirm("Upper case letters?");
        var useLowers = window.confirm("Lower case letters?");
        var useSpecials = window.confirm("Special Character?");

    }


    //they need to pick something. if they do, we can stop asking.
    if (confirmNumber === true || confirmLetterUpper === true || confirmLetterLower === true || confirmSpecial === true) {
        break;
    } else {    //if nothing picked
        window.alert("You have to pick somthing for me to work with!");
    }

    var allowedCharacters = [];
    {
        if (useNumbers) {
            allowedCharacters = allowedCharacters.concat(number)
        }
        if (UseUppers) {
            allowedCharacters = allowedCharacters.concat(letterUpper)
        }
        if (useLowers) {
            allowedCharacters = allowedCharacters.concat(letterLower)
        }
        if (useSpecials) {
            allowedCharacters = allowedCharacters.concat(special)
        }

    }
    return allowedCharacters;
}


function createPassword(passwordLength, allowedCharacters) {
    var randomPassword = ""

    for (var i = 0; i < passwordLength; i++) {
        randomPassword += allowedCharacters[Math.floor(Math.random() * allowedCharacters.length)];
        //use += instead of repeating the variable. Same thing, just neater.

        console.log(randomPassword); //the password as it is built
    }
    return randomPassword;
}
