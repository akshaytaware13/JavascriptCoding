let myName = "Akshay     ";
console.log(myName.trueLength);

let heros = ["Shaktiman", "Spiderman"];


Array.prototype.HeyAkshay = function () {
  // console.log("Hey Akshay");
}

heros.HeyAkshay()


// Inheritence

let User = {
  name: "Akshay",
  age:27
}
const teacher = {
  makeVideo: false
}

const TeachingSupport = {
  isAvailable : false
}

const TAsupport = {
  makeAssistence: "Js Assignment",
  fullTime: true,
  __proto__:TeachingSupport
}

let abc=teacher.__proto__=User
// console.log(abc);

// modern Syntax
let xyz = Object.setPrototypeOf(TAsupport, teacher);
// console.log(xyz);

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`${this.myName}`);
  console.log(`True length is : ${this.trim().length}`);

}

myName.trueLength();