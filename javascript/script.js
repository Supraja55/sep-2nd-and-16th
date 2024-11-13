// Javascript is a dynamic language

// Print the values using console.log()
// console.log("Hello, Welcome to JS");
// console.log("Hello, 2nd line");

// Varibale is name which given to a memory location where we store our data
// Variables will created by using const, let, var.
const studentId = 7643746;
let studentName = "Hemanth";
var studentEmail = "hemanth@google.com";
let studentMobile = null;
let isVerified = false;

// studentId = "736437" //Assignment is not allwoed for const varibales
// studentName = "Manoj"
// studentEmail = "manoj@gmail.com"
// studentMobile = 123

// console.table([studentId, studentEmail, studentName, studentMobile])

/*
Datatypes

1. Number
2. String
3. Boolean
4. Null
5. Undefined
*/

let langName = "JavaScript";

// String Interpolation
// console.log(`I like ${langName} language`);

// Arithematic operators --> +,-,*,/,%,**

// Relational Operators --> <, >, <=, >=, ==, ===, !=

// Logical Operators --> &&, ||, !

// Assignment Operator --> =, +=, -=, *=, /= ...

// let a = 10
// let b = 20
// a += b // a = a + b
// console.log(a);

// Conditional Statements --> if, if else, if else if
// let number = 0;
// if (number > 0) {
//     console.log("Positive Number");
// } else if(number < 0) {
//     console.log("Negative Number");
// } else {
//     console.log("The number is zero");
// }

// let number = 54
// if (number % 2 === 0) {
//     console.log(`${number} is a even number`);
// } else {
//     console.log(`${number} is a odd number`);
// }

// let num1 = 10
// let num2 = 20
// if (num1 > num2) {
//     console.log(`${num1} is bigger than ${num2}`);
// } else {
//     console.log(`${num2} is bigger than ${num1}`);
// }

// find maximum between three numbers.

// Increment Operator
// let a = 10
// Preincrement ++a, Post Increment a++
// let b = ++a;
// console.log(a, b);
// Increment Operator
// let c = 10
// Predecrement --a, Post decrement a--
// let d = --c;
// console.log(c, d);

// Loops --> for, while, do while
// Factorial of natural numbers up to given number
// let number = 5
// let sum = 1
// for(let i=1; i <= number; i++) {
//     sum = sum * i
// }
// console.log(sum);


// While loop
// let i = 0;
// let evenCount = 0
// while (evenCount <= 10) {
//     if (i%2 == 0) {
//         console.log(i);
//         evenCount++;
//     }
//     i++;
// }

// Arrays
// let a = [12, 26, '13', 54, 65]
// a[3] = 89
// let removedValue = a.pop()
// console.log(removedValue, a);
// for (let element of a) {
//     console.log(element**2);
// }

// let newLength = a.push('65')
// console.log(newLength, a);

// console.log(a);

// Functions

// Funtion Defination
// function addition(...rest) {
//     let sum = 0
//     for(let i = 0; i < rest.length; i++) {
//         sum += rest[i];
//     }
//     return sum;
// }

//Function Expression
// let addition = function (...rest) {
//     let sum = 0
//     for(let i = 0; i < rest.length; i++) {
//         sum += rest[i];
//     }
//     return sum;
// }

// Arrow Functions
let addition = (...rest) => {
    let sum = 0
    for(let i = 0; i < rest.length; i++) {
        sum += rest[i];
    }
    return sum;
}

// Function Call
// let result = addition(11, 22, 33, 44, 55)  
// console.log(result);

// Map and Filter
// let a = [9, 8, 7, 6, 5]
// let squares = a.map((element) => {
//     return element**2
// })
// console.log(squares);
// let evens = a.filter((element) => {
//     if (element%2 === 0) {
//         return element
//     }
// })
// console.log(evens);

let students = [
    {
        fullName: 'Supraja',
        gender: 'Female'
    },
    {
        fullName: 'Narasimha',
        gender: 'Male'
    },
]
console.log(students);
