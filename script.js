
var generateBtn = document.querySelector("#generate");

var characterTypeStrings = {
  specialCharacters: '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~',
  numericCharacters: "0123456789",
  lowerCaseCharacters: "abcdefghijklmnopqrstuvwxyz",
  upperCaseCharacters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
};

var generatePassword = function() {

  var totalCharacterSet = "";

  var initialAlert = window.alert("Welcome!");
  

  //Password questions
  var passLength = window.prompt("How many characters will your password have?");
  

 if (passLength < 8 || passLength > 128) {
    window.alert("You must choose a number between 8 and 128.");
    return;
  } 
  

  var specialCharacters = window.confirm("Click OK to include special characters. Otherwise click cancel.");
  if (specialCharacters) {
    totalCharacterSet += characterTypeStrings.specialCharacters;
  };
  
  var numericCharacters = window.confirm("Click OK to include numeric characters. Otherwise click cancel.");
  if (numericCharacters) {
    totalCharacterSet += characterTypeStrings.numericCharacters;
  };

  var lowerCaseCharacters = window.confirm("Click OK to include lowercase characters. Otherwise click cancel.");
  if (lowerCaseCharacters) {
    totalCharacterSet += characterTypeStrings.lowerCaseCharacters;
  };

  var upperCaseCharacters = window.confirm("Click OK to include Uppercase characters. Otherwwise click cancel..");
  if (upperCaseCharacters) {
    totalCharacterSet += characterTypeStrings.upperCaseCharacters;
  };

  if (!specialCharacters + !numericCharacters + !lowerCaseCharacters + !upperCaseCharacters) {
    window.alert("You must choose at least one type of character. Please start over.");
    generatePassword();
  }


  //Generate Password
  var password = "";
  for (let i = 0; i < passLength; i++) {
    password += totalCharacterSet[Math.floor(Math.random() * totalCharacterSet.length)]
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.setAttribute("style", "color: #3cb371")

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
