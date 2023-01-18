'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName},you are ${age} , born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       // creating new variable with same name as outer scope's variable
//       const firstName = 'Steven';

//       // reassigning outer scope's variable
//       output = 'NEW OUTPUT!';

//       const str = `oh , you are millenial ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // console.log(str);
//     console.log(millenial);
//     // console.log(add(2, 3));
//     console.log(output);
//   }

//   printAge();
//   return age;
// }

///////////////////////////////

// hoisting and TDZ in practice

// so we are printing it before declaration
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'prashant';
// let job = 'programmer';
// const year = 1999;

// now we will try on 3 types of function

// console.log(addDeclaration(2, 3));
// console.log(addExpression(2, 3));
// console.log(addArrow(2, 3));

// function addDeclaration(a, b) {
//   return a + b;
// }

// const addExpression = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

//////////////////////////////
// Reason with an example why hoisting is not OK. and why we should not use var to declare vaiables.
// console.log(numProducts);

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted');
// }

////////////////////////////////
// THE THIS KEYWORD IN PRACTICE
// using this keyword outside any function
// console.log(this);

// using this keyword in regular function
// const calcAge = function (birthYear) {
//   // console.log(2023 - birthYear);
//   console.log(this);
// };

// calcAge(1999);

// using this keyword in arrow function
// const calcArrow = birthyear => {
//   console.log(2023 - birthyear);
//   console.log(this);
// };

// calcArrow(1999);

// using this keyword inside of a method (function inside of an object is called method)
// const prashant = {
//   year: 1999,
//   calcAge: function () {
//     console.log(2023 - this.year);
//     console.log(this);
//   },
// };

// prashant.calcAge();

// const matilda = {
//   year: 2001,
// };

// coping method from one object to another(this is called method borrowing)
// matilda.calcAge = prashant.calcAge;
// console.log(matilda);

// matilda.calcAge();

/////////////////////////////////////////////////////////////////////////
// REGULAR FUNCTIONS VS ARROW FUNCTIONS

// const prashant = {
//   firstName: 'prashant',
//   year: 1999,
//   calcAge: function () {
//     console.log(2023 - this.year);
//     console.log(this);
//   },
//   greet: () => {
//     console.log(this);
//     console.log(`hey ${this.firstName}`);
//   },
// };

// prashant.greet();

// example of pitfall of this keyword is when we have a funciton inside of a method.

// const prashant = {
//   firstName: 'prashant',
//   year: 1999,
//   calcAge: function () {
//     console.log(2023 - this.year);
//     console.log(this);

//     // saved this keyword inside the self variable
//     const self = this;
//     const IsMillenial = function () {
//       console.log(this);
//       console.log(self.year >= 1981 && self.year <= 1996);
//     };
//     IsMillenial();
//   },
//   greet: () => {
//     console.log(this);
//     console.log(`hey ${this.firstName}`);
//   },
// };

// prashant.greet();
// prashant.calcAge();

//////////////////////////////////////////////////
// primitives vs objects (primitive types vs reference types)

// primitives types
// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// // reference types
// const me = {
//   name: 'prashant',
//   age: 23,
// };

// const newMe = me;
// newMe.age = 24;

// console.log(me);
// console.log(newMe);
