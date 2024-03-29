// Strings of our 4 possible character groups
var upperStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerStr = "abcdefghijklmnopqrstuvwxyz";
var specialStr =  "!#$%&()?@[]^_{|}~";
var numStr = "1234567890";
var passDisplay = document.querySelector("#password_display");

// String to hold the possible characters the password can use
var characters = "";

// String to hold the generated  
var password = "";

// Generate a password based on user criteria
function generatePW() {
  
  // Check if a password is currently on the screen 
  if (passDisplay.hasChildNodes() == true) {
    alert("You already have a password! Please copy existing password to clipboard or reload page.");
    return false;
  } else {
    // Start Prompts:
    // 1) User is prompted for desired password length
    var pwLength = prompt("How long would you like your password? The minimum password length is 8 characters and the maximum length is 128 characters.");

    // Validate that prompt input is a number and is not blank
    if (isNaN(pwLength) == true || pwLength === "") {
      alert("Invalid input. You must choose a number between 8 and 128.\n\nPress \"Generate Password\" to try again.");
      return false;

      // Validate that prompt input is between 8 and 128 characters
      } else if (pwLength < 8 || pwLength > 128) {
      alert("Try another number. Password must be between 8 and 128 characters.\n\nPress \"Generate Password\" to try again.");
      return false;

      // Once validated, return password length
      } else {
      alert("Great. Your password will be " + pwLength + " characters.");
    }

    // 2) Now confirm which input sets the user would like to include when generating password
    alert("Your password can include upper and lower case letters, special characters, and numbers. Please follow the prompts to craft your password.");
      
    if (confirm("Would you like your password to include UPPER CASE letters?\n\nIf Yes, press \"OK.\" If No, press \"Cancel.\"")){
        characters += upperStr;
      }
      
    if (confirm("Would you like your password to include lower case letters?\n\nIf Yes, press \"OK.\" If No, press \"Cancel.\"")){
      characters += lowerStr;
    }

    if (confirm("Would you like your password to include special characters?\n\nIf yes, press \"OK.\" If no, press \"Cancel.\"")){
      characters += specialStr;
    }

    if (confirm("Would you like your password to include numbers?\n\nIf yes, press \"OK.\" If no, press \"Cancel.\"")){
      characters += numStr;
    }

    if (characters.length < 1) {
      alert("You must include at least one set of characters in your password.\n\nPress \"Generate Password\" to try again.");
      return false;
    }
    // We should now have our built character string

    // Now iterate through our character string the number of times chosen for pw length
    // On each iteration, we choose a random number, the random number is less than our character string length
    // Then select a character from the character string using the random number as the index

    for (var i=0; i < pwLength; i++) {
      var x = Math.floor(Math.random() * characters.length);
      password += characters.charAt(x);
    }
  }

  // Display password on screen
  function displayPW(text) {
    // Create and style an element to hold our password string 
    var pwInput = document.createElement("textarea");

    pwInput.setAttribute("id", "pwInput");
    pwInput.setAttribute("type", "text");
    pwInput.setAttribute("class", "form-control");
    pwInput.setAttribute("style", "margin: 10px");
    pwInput.setAttribute("readOnly", "true");

    // Append textarea element to my #password_display div
    passDisplay.appendChild(pwInput);
    pwInput.value = text;
  }

  // Finally display the password on screen
  displayPW(password);

}

function copyClip() { 
  document.getElementById("pwInput").select();
  document.execCommand("copy");
  alert("Copied the password: " + password);
  location.reload();
}