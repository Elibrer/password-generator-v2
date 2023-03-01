
var generateBtn = document.querySelector("#generate");
// var lengthSlider = document.querySelector("#lengthSliderText");
var includeNumbers = prompt;



//Char length 
var lengthCorrect = true;
var passwordLength = 8;

var slider = document.getElementById("range");
var sliderOutput = document.getElementById("lengthSliderText");
sliderOutput.innerHTML = slider.value;

slider.oninput = function() {
  sliderOutput.innerHTML = this.value;
  passwordLength = slider.value;
}

var uppercase = false;
var lowercase = false;
var numeric = false;
var special = false;

var upSelect = document.querySelector("#uppercaseSelect");
var lowSelect = document.querySelector("#lowercaseSelect");
var numSelect = document.querySelector("#numericSelect");
var specSelect = document.querySelector("#specialSelect");

function typeCheck() {
  if (upSelect.checked === true) {
    uppercase = true;
  } else {
    uppercase = false;
  }
  
  if (lowSelect.checked === true) {
    lowercase = true;
    lowSelect.checked = true;
  } else {
    lowercase = false;
    lowSelect.checked = false;
  }
  
  if (numSelect.checked === true) {
    numeric = true;
    numSelect.checked = true;
  } else {
    numeric = false;
    numSelect.checked = false;
  }
  
  if (specSelect.checked === true) {
      special = true;
       specSelect.checked = true;
  } else {
       special = false;
      specSelect.checked = false;
  }

}



function writePassword() {
  // var password = generatePassword();


  //Assign passwordText to the html textbox & password declaration
  var passwordText = document.querySelector("#password");
  var password = "";
  var passwordArr = [];

  
  //Char types loop
  var charTypes = false;
  
  //Char type declarations
  var lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numericChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*"];

  //All chars declaration
  var allChars = []; 

  //Var for ensuring one of each char type is included in final password
  var guaranteedCharsNumber = 0;
  



  while (charTypes === false) {

    typeCheck();
     
    if (uppercase === true || lowercase === true || numeric === true || special === true) {
      charTypes = true;
    } else {
      alert("No character types were selected. Please choose at least one type.")
      charTypes = false;
      return;
    }
  }

  console.log(uppercase);
  console.log(lowercase);
  console.log(numeric);
  console.log(special);



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
