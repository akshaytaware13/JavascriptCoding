//Object literals

const user = {
  name: "Akshay",
  age: 27,
  city: "Pune",
  email: "test@gmail.com",
  isLoggedIn: false,
};

// console.log(user.city);
// console.log(user["email"]);

// Object.freeze(user);
// user.email = "abc@gmail.com";
// console.log(user);

// user.abcd = function () {
//   console.log("Hello This is JS Practise");
// }
// user.abcd();

// user.xyz = function () {
//   console.log(`Hello your age is, ${this.age}`);
// };
// user.xyz();

// ************************Singletones or constructor********************************************************

// const keys = new Object();
// console.log(keys);

// const regularUser = {
//   email:"test@gmail.com",
//   fullname: {
//     userFullName: {
//       fullName: "Akshay",
//       LastName: "Taware",
//     }
//   }
// };

// console.log(regularUser.fullname.userFullName.LastName);


const obj = { 1: "A", 2: "B" };
const obj2 = { 3: "C", 4: "D" };
// const obj3 = Object.assign({}, obj, obj2);

const obj3 = {...obj, ...obj2}

// console.log(obj3);

// console.log(Object.entries(user));
// console.log(user.hasOwnProperty('city'));

// Destructering

const objs = {
  names: "Abhi",
  age: 28,
  marks: 87,
  city: "Pune",
  isLoggedIn:true
}

const { city,age,marks,names,isLoggedIn } = objs;
console.table(city);

