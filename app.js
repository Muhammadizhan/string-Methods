// Question - 01
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
alert("Hello, " + fullName + "! Welcome.");

// question - 02
var favoriteModel = prompt("What is your favorite mobile phone model?");
var length = favoriteModel.length;
alert("The length of your favorite mobile phone model is: " + length);

// Question - 03
var word = "Pakistani";
var index = word.indexOf("n");
alert("The index of 'n' in the word 'Pakistani' is: " + index);

// Question - 04

var word = "Hello World";
var lastIndex = word.lastIndexOf("l");
alert("The last index of 'l' in the word 'Hello World' is: " + lastIndex);

// question - 05
var word = "Pakistani";
var character = word.charAt(3);
alert(
  "The character at the 3rd index in the word 'Pakistani' is: " + character
);

// Question - 06
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName.concat(" ", lastName);
alert("Hello, " + fullName + "! Welcome.");

// Question - 07
var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");
alert("Original city: " + city + "\nNew city: " + newCity);
