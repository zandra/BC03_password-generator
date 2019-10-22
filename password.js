
// Strings of our 4 possible characters groups
var upperStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerStr = "abcdefghijklmnopqrstuvwxyz";
var specialStr =  " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var numStr = "1234567890";


var possibilities = [
  ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
  ["abcdefghijklmnopqrstuvwxyz"],
  [" !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"],
  ["1234567890"]
];

// User chosen pw length
var pwLength = prompt("How long do you want your password to be? Choose a number between 8 and 128 characters.");


function validater(num) {
  
  if (isNaN(num) == true) {
    alert("Invalid input. Please enter a number.");
    return false;
  } 

   var int = parseInt(pwLength);

  if (int < 8 || int > 128) {
    alert("Your password must be between 8 and 128 characters.");
    return false;
  } 
  return true;

};

validater(pwLength);


console.log(pwLength);
console.log("-------------");


  /// String of possible characters to use in password
  
  var characters = "";

  function prompts() {
    
    if (confirm("Would you like your password to include UPPER CASE letters?")){
      characters += upperStr;
    };

    if (confirm("Would you like your password to include lower case letters?")){
      characters += lowerStr;
    };

    if (confirm("Would you like your password to include special characters?")){
      characters += specialStr;
    };

    if (confirm("Would you like your password to include numbers?")){
      characters += numStr;
    };
};

while(characters.length < 2) {
  alert("Your password can include upper and lower case letters, special characters, and numbers. Please follow the prompts to craft your password.")
  prompts();
};

console.log(characters);
console.log("-------------");


//variable to hold our password string
var password = "";

for (i=0; i < pwLength; i++) {
  var x = Math.floor(Math.random() * characters.length);
  password = password + characters.charAt(x);
}
console.log(password);
console.log("-----  Finish -------");


