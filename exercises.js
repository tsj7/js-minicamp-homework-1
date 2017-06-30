//Do not change any of the function names

/* Feynman's
variable - A variable is a place to store information, a value or data. This can
later be referenced in your code to recall the previosly stored info.

String - A string is a type of vaiable that can store text and/or numbers. Unlike
a standard variable a string must be declared inside a set of single or double quotes
like this: var strg = "1st String" or '1st String'

Functions (arguments, return) - A function is a set of code this is designed to
produce a result or complete a task. It can be repeated over and over and thus saves
time and promotes organized code. When a function is created perameters must be set
to store the information that will be "called" later. The word "return" followed by
perameters or arguments that were previously will call and display the information
from the function.

if statements - An if statement is used to decide if something is true or false.
If the code inside of the curly braces is true then it will run, if it false it
will be ignored.

Boolean values (true, false) - a Boolean is a value that is either true or false.
It is often used when needing to gather data regarding an answer that would result
in yes/no, true/false, on/off, start/stop.

*/

function multiplyByTen(num) {
  var product = num * 10;
  return product;
  //return num after multiplying it by ten
  //code here
}

function subtractFive(num) {
  return num - 5;
  //return num after subtracting five
  //code here
}

function areSameLength(str1, str2) {
  if (str1.length === str2.length){
      return true;
  }
    return false;
}

  //return true if the two strings have the same length
  //otherwise return false
  //code here


function areEqual(x, y) {
  if (x === y){
    return true;
  }
    return false;
  }
  //return true if x and y are the same
  //otherwise return false
  //code here


function lessThanNinety(num) {
  if (num < 90){
      return true;
    }
      return false;
}
  /*if (num) < 90;
    return true;
  } else  {
    return false;
}*/
  //return true if num is less than ninety
  //otherwise return false
  //code here


function greaterThanFifty(num) {
  if (num > 50) {
      return true;
    }
      return false;
  }
  //return true if num is greater than fifty
  //otherwise return false
  //code here

function add(x, y) {
return x + y;
  //add x and y together and return the value
  //code here
}

function subtract(x, y) {
  return x - y;
  //subtract y from x and return the value
  //code here
}

function divide(x, y) {
  return x / y;
  //divide x by y and return the value
  //code here
}

function multiply(x, y) {
  return x * y;
  //multiply x by y and return the value
  //code here
}

function getRemainder(x, y) {
  return x % y;
  //return the remainder from dividing x by y
  //code here
}

function isEven(num) {
  if (num % 2 === 0){
       return true;
   }
   return false;

  //return true if num is even
  //otherwise return false
  //code here
}

function isOdd(num) {
  if (num % 2 === 0){
       return false;
  }
       return true;
  //return true if num is false
  //otherwise return false
  //code here
}

function square(num) {
return Math.pow(num, 2);

//square num and return the new value
  //code here
}

function cube(num) {
return Math.pow(num,3);
  //cube num and return the new value
  //code here
}

function raiseToPower(num, exponent) {
return Math.pow(num, exponent);

  //raise num to whatever power is passed in as exponent
  //code here
}

function roundNumber(num) {
  return Math.round(num);
  //round num and return it
  //code here
}

function roundUp(num) {
  return Math.ceil(num);
  //round num up and return it
  //code here
}

function addExclamationPoint(str) {
  return (str + '!');
  //add an exclamation point to the end of str and return the new string
  //'hello world' -> 'hello world!'
  //code here
}

function combineNames(firstName, lastName) {
  return (firstName + ' ' + lastName);
  //return firstName and lastName combined as one string and separated by a space.
  //'Lambda', 'School' -> 'Lambda School'
  //code here
}

function getGreeting(name) {
  return ('Hello ' + name + '!');

  //Take the name string and concatenate other strings onto it so it takes the following form:
  //'Sam' -> 'Hello Sam!'
  //code here
}

//If you can't remember these area formulas then head over to Google or look at the test code.

function getRectangleArea(length, width) {
  return length * width;
  //return the area of the rectangle by using length and width
  //code here
}

function getTriangleArea(base, height) {
  return base * height * .5;
  //return the area of the triangle by using base and height
  //code here
}

function getCircleArea(radius) {
  return Math.round(Math.PI * Math.pow(radius, 2));

  //return the rounded area of the circle given the radius
  //code here
}

function getRectangularPrismVolume(length, width, height) {
  return length * width * height;
  //return the volume of the 3D rectangular prism given the length, width, and height
  //code here
}


//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
