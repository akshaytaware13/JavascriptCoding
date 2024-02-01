"use strict";

//Primitive
let names = "Akshay";
let age = 27;
let correct = false;
let obj = null;
let sign = undefined;
let unique = Symbol;
let num = BigInt;
let objs = {
  name: "Akshay",
  mob: 8598450485,
  city:"Pune"
}

let arr = [1, 2, 3, 4, 5];
console.table([names, age, correct, obj, sign, unique, objs, arr,num]);

console.log(typeof names);
console.log(typeof age);
console.log(typeof correct);
console.log(typeof obj);
console.log(typeof sign);
console.log(typeof unique);
console.log(typeof objs);
console.log(typeof arr);
console.log(typeof num);


// NonPrimitive (Reference)
// Arrays
// Objects
// Functions