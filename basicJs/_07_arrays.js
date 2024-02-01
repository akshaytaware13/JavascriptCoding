//Arrays

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr);
// console.log(arr.push(10));
// console.log(arr.pop());
// console.log(arr.unshift(0));
// console.log(arr.shift());
// console.log(arr.includes(9));
// console.log(arr.indexOf(2));
// console.log(arr.lastIndexOf(7));
// console.log(arr.indexOf(20));

// const newArr = arr.join();
// console.log(arr);
// console.log(typeof newArr);


//slice, splice
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const newArr = arr1.slice(1, 3);
// console.log(arr1);
// console.log(newArr);

// const newArr1 = arr1.splice(1, 3);
// console.log(newArr);
// console.log(newArr1);

// const cities = ["Tokyo", "Cairo", "Los Angeles", "Paris", "Seattle"];

// const newCityArr = cities.slice(2);

// console.log("Original: ", cities);
// console.log("New: ", newCityArr);

// const first = [1, 2, 3];
// const second = [4, 5, 6];
// console.log(first.concat(second));

// const all = [...first, ...second];
// console.log(all);


//flat method

// const arr1 = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]];
// const arr2 = arr1.flat(Infinity);
// console.log(arr2);

//check array or not
// console.log(Array.isArray([1, 2, 3, 4]));
// console.log(Array.isArray({}));

//make array
console.log(Array.from("Akshay"));

let a = 120;
let b = 130;
let c = 140;

console.log(Array.of(a,b,c));

