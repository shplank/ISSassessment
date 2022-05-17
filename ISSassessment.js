/*
Indepedent Studio Services
https://issprops.com

Software Developer Candidate Assessment
*/

// #1
// Q: What is the difference between let and var

// A: let is used to declare variables that are scoped only to a specific block and cannot be redeclared; var is used more globally, at function scope, and allows variables to be redeclared



// #2
// Q: Write a function that takes 2 arguments, first one is an array, second one is a string. loop through the array and find a matching result of the second argument. return the matched index of the array, if there is any

// A:
let handprops = ['letter', 'candle', 'cup', 'pen', 'knife', 'phone', 'watch'];
let myprop = 'phone';

function findprop(x, y) {
  return y.indexOf(x);
};

console.log(findprop(myprop, handprops));
// returns 5



// #3
// Q: Fix the bug
function average(a, b) {
	return a + b / 2;
}

console.log(average(2, 1));

// need to put parenthesis around the a + b:

function average(a, b) {
	return (a + b) / 2;
}

console.log(average(2, 1));



// #4
// Q: What is the output?
let a = 22;
let b = 'abc';
let c = 51;
let d = a + b + c;

console.log(d);

// A: "22abc51"



// #5
// Q: Call the function in Q #2 with the following data and what is the output?
//let animals = ['Dog', 'Cat', 'Lion', 'Tiger', 'Elephant', 'Turtle', 'Bear'];
//let find = 'Whale';

// A: -1