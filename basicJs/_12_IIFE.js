// Immediately invoked function expressions (IIFE)

(function abcd() {
  // console.log("DB Connected");
})();

(()=> {
  // console.log("Connected");
})();



let val1 = 10;
let val2 = 20;

function add(num1, num2) {
  let total = num1 + num2;
  return total;
}

let result1 = add(val1, val2);
let result2 = add(100, 200);

// console.log(result1);
// console.log(result2);

