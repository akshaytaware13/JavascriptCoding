
const user = {
  username: " Ankit",
  price: 123,
  message: function () {
    // console.log(`${this.username}, Welcome to website`);
  }
}

user.message();

function codeing() {
  // console.log(this);
}
codeing();


const code = () => {
  // console.log("Hello World");
  // console.log(this);
}

code();



const addition = (num1,num2) => {
  return num1 + num2;
}
// console.log(addition(2,4));


const addTwo = (num1, num2) => num1 + num2;
console.log(addTwo(50,40));