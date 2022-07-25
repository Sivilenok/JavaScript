"use strict";

// Task 1 

let x = 20;
let y = 58;
let z = 42;

console.log(x + y + z);

// Task 2

let seconds = 60;
let minutes = 60;
let hours = 24;
let days = 365;
let myAge = 31;
let myAgeInSeconds = myAge * days * hours * minutes * seconds;

console.log(myAgeInSeconds); 

// Task 3

let count = 42;
let userName = '42';

let a = count;
console.log(String(a));

let b = userName;
console.log(+b);

// Task 4

let a = 1;
let b = 2;
let c = "белых медведей";

console.log(''+a + ''+b + c);

// Task 5

let a = 'доступ';
let b = 'морпех';
let c = 'наледь';
let d = 'попрек';
let e = 'рубило';
let lengthWords = a.length + b.length + c.length + d.length + e.length;

console.log(lengthWords);

// Task 6

let variableA = 'string';
let variableAType = typeof variableA;

let variableB = 7;
let variableBType = typeof variableB;

let variableC = true;
let variableCType = typeof variableC;

console.log('Variable: variableA have type: ${variableAType}');
console.log('Variable: variableB have type: ${variableBType}');
console.log('Variable: variableC have type: ${variableCType}');


// Task 7 

let user = prompt('Your name');
let userAge = prompt('Your age');

console.log(`Hello, ${user}! ${userAge}`);

// ADVANCED level Task 1

let a = 4;
let b = 3;

[a, b] = [3, 4];

console.log(a);
console.log(b);


// ADVANCED level Task 2

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];
console.log(cipher);

