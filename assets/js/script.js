
var generateBtn = document.querySelector("#generate");
var includeNumbers = prompt;

function writePassword() {
  // var password = generatePassword();


  //Assign passwordText to the html textbox & password declaration
  var passwordText = document.querySelector("#password");
  var password = "";
  var passwordArr = [];

  //Char length 
  var lengthCorrect = true;
  var passwordLength = 8;

  //Char types loop
  var charTypes = false;
  
  var uppercase = false;
  var lowercase = false;
  var numeric = false;
  var special = false;

  //Char type declarations
  var lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numericChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*"];

  //All chars declaration
  var allChars = []; 

  //Var for ensuring one of each char type is included in final password
  var guaranteedCharsNumber = 0;
  
  //Char length loop ------------------------------------------------------------------------------>
  while (lengthCorrect === true) {
    var passwordLength = prompt("How many characters would you like? (min 8, max 128)", passwordLength);
    console.log("Password Length: " + passwordLength);
    
    if (passwordLength === null) {
      alert("Generate tool terminated.");
      return;
    } else if (passwordLength <= 7 || passwordLength >= 129) {
      alert("Password length needs to be more than 8 characters, or less than 128 characters. Please try again.");
      lengthCorrect = true;
    } else if (passwordLength >= 8 && passwordLength <= 128) {
      alert("Password length set to: " + passwordLength);
      lengthCorrect = false;
    } else {
      alert("Please enter a valid number.");
    }

  }

  //Char Types loop ------------------------------------------------------------------------------->
  while (charTypes === false) {

    var charLoop = true;

    while (charLoop === true) {
      var promptYN = prompt("Would you like to include uppercase letters? Y/N");
      if (promptYN === null) {
        alert("Generate tool terminated.");
        return;
      }

      promptYN = promptYN.toUpperCase();

      if (promptYN === "Y") {
        alert("Uppercase letters will be included.");
        uppercase = true;
        charLoop = false;
      } else if (promptYN === "N") {
        alert("Uppercase letters will not be included.");
        uppercase = false;
        charLoop = false;
      } else {
        alert("Please enter either Y or N.")
        charLoop = true;
      }
    }

    charLoop = true;

    while (charLoop === true) {
      var promptYN = prompt("Would you like to include lowercase letters? Y/N");
      if (promptYN === null) {
        alert("Generate tool terminated.");
        return;
      }

      promptYN = promptYN.toUpperCase();

      if (promptYN === "Y") {
        alert("Lowercase letters will be included.");
        lowercase = true;
        charLoop = false;
      } else if (promptYN === "N") {
        alert("Lowercase letters will not be included.");
        lowercase = false;
        charLoop = false;
      } else {
        alert("Please enter either Y or N.")
        charLoop = true;
      }
    }

    charLoop = true;

    while (charLoop === true) {
      var promptYN = prompt("Would you like to include numeric characters? Y/N");
      if (promptYN === null) {
        alert("Generate tool terminated.");
        return;
      }

      promptYN = promptYN.toUpperCase();

      if (promptYN === "Y") {
        alert("Numeric characters will be included.");
        numeric = true;
        charLoop = false;
      } else if (promptYN === "N") {
        alert("Numeric characters will not be included.");
        numeric = false;
        charLoop = false;
      } else {
        alert("Please enter either Y or N.")
        charLoop = true;
      }
    }

    charLoop = true;

    while (charLoop === true) {
      var promptYN = prompt("Would you like to include special characters? Y/N");
      if (promptYN === null) {
        alert("Generate tool terminated.");
        return;
      }

      promptYN = promptYN.toUpperCase();

      if (promptYN === "Y") {
        alert("Special characters will be included.");
        special = true;
        charLoop = false;
      } else if (promptYN === "N") {
        alert("Special characters will not be included.");
        special = false;
        charLoop = false;
      } else {
        alert("Please enter either Y or N.")
        charLoop = true;
      }
    } 

    if (uppercase === true || lowercase === true || numeric === true || special === true) {
      alert("The character types have been selected, thank you.\nGenerating password now:")
      charTypes = true;
    } else {
      alert("No character types were selected. Please choose at least one type.")
      charTypes = false;
    }
  }

  // Password generation -------------------------------------------------------------------------->

  if (lowercase === true) {
    var randomLower = lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
    console.log("Chosen random lowercase letter: " + randomLower);
    passwordArr.push(randomLower);
    guaranteedCharsNumber++;
    allChars = allChars.concat(lowercaseChars);
  }

  if (uppercase === true) {
    var randomUpper = uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
    console.log("Chosen random uppercase letter: " + randomUpper);
    passwordArr.push(randomUpper);
    guaranteedCharsNumber++;
    allChars = allChars.concat(uppercaseChars);  
  }

  if (numeric === true) {
    var randomNumeric = numericChars[Math.floor(Math.random() * numericChars.length)];
    console.log("Chosen random number: " + randomNumeric);
    passwordArr.push(randomNumeric);
    guaranteedCharsNumber++;
    allChars = allChars.concat(numericChars);
  }

  if (special === true) {
    var randomSpecial = specialChars[Math.floor(Math.random() * specialChars.length)];
    console.log("Chosen random special character: " + randomSpecial);
    passwordArr.push(randomSpecial);
    guaranteedCharsNumber++;
    allChars = allChars.concat(specialChars);
  }

  console.log("List of all chosen characters: " + allChars);

  //Adding more characters until passwordLength is satisfied -------------------------------------->
  for (var i = 0; i < passwordLength - guaranteedCharsNumber; i++) {
    passwordArr.push(allChars[Math.floor(Math.random() * allChars.length)]);
  }

  //Shuffles passwordArr elements ----------------------------------------------------------------->
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  shuffle(passwordArr);

  //Converts shuffled array into a string, while adding it to the final password variable --------->
  password += passwordArr.join("");

  document.getElementById("password").value = password;
  passwordText = password;
}

generateBtn.addEventListener("click", writePassword);
