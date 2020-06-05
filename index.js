// Doesn't same the user input
prompt("Enter your age: ");

// Asks user for their age, stores it in variable and displays age
var age = prompt("Enter your age: ");
alert(age)

// Prompt user for their age and then display their and my age
var myAge = 32;
var yourAge = prompt("Enter your age");
alert("My age is " + myAge + " your age is " + yourAge + ".");

// Count number of characters in the string
var myName = "Jigar Kamlesh Patel";
alert("My name contains " + myName.length + " characters");

// Slice strings
var userInput = "Jigar Patel is an Electrical Engineer who obtained his Bachelors and Masters Degree from Florida State University in Tallahassee, Florida, USA. After graduation he started working in the defense sector at Northrop Grumman in Baltimore, Maryland."
var strSlice = 140;
alert("You have entered " + userInput.length + " characters, you have " + (strSlice - userInput.length) + " characters left.");
alert("First " + strSlice + " characters of the string are: " + userInput.slice(0,strSlice));

// Change string case
//   1. Upper Case -> toUpperCase()
//   2. Lower Case -> toLowerCase()
var name = "Jigar"
var uName = name.toUpperCase()
var lName = name.toLowerCase()

alert(name + ", " + uName + ", " + lName)
