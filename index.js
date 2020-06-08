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

// Print value to console
console.log(name);

// Functions with parameters
function getMilk(money) {

    var intBottles = Math.floor(money / 1.5);

    console.log("You can get " + intBottles + " bottles of milk.");
    return money % 1.5;
}

console.log("Your change is $ " + getMilk(11))

// Random Number Generator (Generates a 16-digit random number)
// Number generated ranges between 0 - 0.9999999999999999 (16-9s)
var randNum = Math.random();

// Checking equalities for if statements
var numA = 123;
var numB = "123";

// This one cares about the data types and returns true only if value & data match
if (numA === numB) {
  console.log("A === B");
}
// This one doesn't care about the date type and will return yes
if (numA == numB) {
  console.log("A == B");
}


 // if-else if-else statements
function isLeap(year) {
    //Write your code here.
    var divBy4 = (year % 4) === 0;
    var divBy100 = (year % 100) === 0;
    var divBy400 = (year % 400) === 0;
    console.log(divBy4);
    console.log(divBy100);
    console.log(divBy400);

    if (divBy400) {
        return "Leap year.";
    }else if (divBy100) {
        return "Not leap year.";
    }else if (divBy4) {
        return "Leap year.";
    } else {
      return "Not leap year."
    }
}

console.log(isLeap(2400));
console.log(isLeap(2100));
