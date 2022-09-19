// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var password = prompt("Enter your password: ");

function writePassword() {
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 8;

  for (var j = 0; j <= password.length; j++) {

    var RandomNum = Math.floor(Math.random()* chars.length);
    password += chars.substring(RandomNum, RandomNum +1);

    if(passwordLength === 8) {
      console.log("Your new password is: " + password);
    
    }

    else {
      console.log("Invalid, please try again!");

    }

    document.querySelector("#generate").value = password;

  }
  
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password")

  passwordText.value = password;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
