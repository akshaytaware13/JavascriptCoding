//********************* */ For Loop*******************************
let arr = 10;
for (let num = 1; num <= arr; num++) {
  // console.log(num *2);
}

for (let i = 0; i < 10; i++) {
  const ele = i;
  if (ele == 5) {
    // console.log("Print 5");
  }
  // console.log(i);
}

for (let i = 2; i <= 30; i++) {
  // console.log(`\n A column of the multiplication table \n ${i}\n`);
  for (let j = 1; j <= 10; j++) {
    // console.log(` ${i} * ${j} = ${i*j}`);
  }
}

let myArr = ["Superman", "Hanuman", "Shaktiman"];
for (let index = 0; index < myArr.length; index++) {
  const element = myArr[index];
  // console.log(element);
}

//***************** */ While Loop**********************

let index = 1;
while (index <= 10) {
  // console.log(index);
  index++;
}

let myAr = ["abc", "def", "ghi"];
let i = 0;
while (i < myAr.length) {
  // console.log(myAr[i]);
  i++;
}

// ************do while*********************************

let score = 1;
do {
  // console.log("right");
  score++;
} while (score <= 5);

//****************** */ For Of loop ***************

const arr1 = [1, 2, 3, 4, 5, 6];

for (const num of arr1) {
  // console.log(num);
}

const states = ["Maharashtra", "Rajasthan", "Gujrat"];
for (const st of states) {
  // console.log(st);
}

// ***************Map******************

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("EUR", "Europe");

// console.log(map);
for (const [key, values] of map) {
  // console.log(key,":- ",values);
}

const obj = {
  game1: "NFS",
  game2: "Cricket",
  game3: "Ludo",
};

// for (const [key,valuess] of obj) {
//   console.log(key,valuess);
// }

//**************** */ For In Loop**********************
const languages = {
  js: "Javascript",
  ts: "Typescipt",
  cpp: "C++",
  py: "Python",
};

for (const key in languages) {
  // console.log(`${key} is a Extension of ${languages[key]}`);
}
const programming = [
  "Javascript",
  "Typescipt",
  "Python",
  "JAVA",
  "Angular",
  "React",
];
for (const key in programming) {
  // console.log(`index of ${key} is ${programming[key]}`);
}

// **********ForEach Loop ************************

const marks = [97, 89, 79, 90, 40];
marks.forEach((item, index, arr) => {
  // console.log(item, index, arr);
});


// **********Filter ************************

const myNum = [1, 2, 3, 4, 5];
const abc = myNum.filter((item) => item > 4)
  // console.log(abc);


const myno = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let cal =myno.map((numss) => {
  return numss = numss + 2;
})
console.log(cal);