// Assignment code here
// GIVEN I need a new, secure password


// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var wantsLower =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wantsUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var wantsNumber = Math.floor(Math.random() * 1);
var wantsSpecialChar =  [ '!', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^',' _', '{', '|', '}', '~', '/', ];
var possibleCharacters = [];

 // THEN I am presented with a series of prompts for password criteria
 // WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// var getPlayerName = function() {
//   var name = "";
//   while (name === "" || name === null) {
//       name = prompt("What is your robot's name?");
//   }
//   console.log("Your robot's name is " + name);
//   return name;
// }


var characterLength = function() {
      var length = "";
      var characterPrompt = prompt("Please choose a length of at least 8 characters and no more than 128 characters.");
      if (characterPrompt == "" || characterPrompt == null) {
        alert("You need to provide a valid answer! Please try again.");
        return characterLength();
      }
      if (characterPrompt <= 7 || characterPrompt >= 129) {
        alert("Please pick a number between 8 and 128 characters.");
        return characterLength();
      }
      if (characterPrompt >= 8 || characterPrompt <=128) {
        length = characterPrompt;
        chooseLower();
        console.log(length);
      }
      possibleCharacters.push(length);
  };

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

var chooseLower = function() {
  var lower = "";
  var lowerPrompt = prompt('Would you like to include lowercase characters?');
    if (lowerPrompt == "" || lowerPrompt == null) {
      alert("You need to provide a valid answer! Please try again.");
      return lowerPrompt();
    }

    if (lowerPrompt === "yes" || lowerPrompt === "Yes") {
      lower = wantsLower;
      possibleCharacters.push(wantsLower);
    }

    if (lowerPrompt === "no" || lowerPrompt === "No") {
    }
    chooseUpper();
  };

  var chooseUpper = function() {
    var upper = "";
    var upperPrompt = prompt('Would you like to include uppercase characters?');
    if (upperPrompt == "" || upperPrompt== null) {
      alert("You need to provide a valid answer! Please try again.");
      return upperPrompt();
    }

    if (upperPrompt=== "yes" || upperPrompt=== "Yes") {
      upper = wantsUpper;
      possibleCharacters.push(wantsUpper);
    }

    if (upperPrompt=== "no" || upperPrompt=== "No") {
    }
    wantsNumber();
  };
console.log(possibleCharacters);
var wantsNumber = function() {
  prompt('Would you like to include numbers?');
  wantsNumber = parseInt(wantsNumber);
  if (wantsNumber == "" || wantsNumber == null) {
    alert("You need to provide a valid answer! Please try again.");
    return wantsNumber();
  }

  if (wantsNumber === "yes" || wantsNumber === "Yes") {
    possibleCharacters.concat(wantsNumber);
    return true;
    // wantsNumber.wantsUpper();
  }

  if (wantsNumber === "no" || wantsNumber === "No") {
    // wantsUpper();
    return false;
    wantsSpecialChar();
  }
  wantsSpecialChar ();
};

var wantsSpecialChar = function() {
  prompt('Would you like to include special characters?');
  if (wantsSpecialChar == "" || wantsSpecialChar == null) {
    alert("You need to provide a valid answer! Please try again.");
    return wantsSpecialChar();
  }

  if (wantsSpecialChar === "yes" || wantsSpecialChar === "Yes") {
    possibleCharacters.concat(wantsSpecialChar);
    return true;
    // wantsSpecialChar.wantsUpper();
  }

  if (wantsSpecialChar === "no" || wantsSpecialChar === "No") {
    // wantsUpper();
    return false;
  } 
};

var writePassword = function () {
}

// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");


// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected


// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria





// var passwordText = document.querySelector('#password');
// passwordText.value = password;




  // characterPrompt = parseInt (characterPrompt);

// // Write password to the #password input

//   passwordText.value = password;

// }

//  WHEN I click the button to generate a password
generateBtn.addEventListener("click", writePassword);



// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
// }

// possibleCharacters.length 
// possibleCharacters[randomNumber];

// generatedPassword.push(randomLetter);


//  math function == 10 min 
// 
// var message =
//   'Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.';
// var words = message.split(' ');