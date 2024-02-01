// Function 1)
function Addition(A, B) {
  let result = A + B;
  console.log("Hello");
  return result;
}
// console.log(Addition(5, 8));//Arguments
//2)
function loginUserName(userName) {
  if (!userName) {
    console.log("Please enter a userName");
    return;
  }
  return `${userName} just logged in...`;
}

// console.log(loginUserName("Akshay"));


// 3)
function calculate(...num) {
  return num;
}
// console.log(calculate(10,20,30));

// 4)

const user = {
  userName: "Abhi",
  price: 12345
}

function handleObj(anyObj) {
  // console.log(`username is ${anyObj.userName} and price is ${anyObj.price}`);
}
handleObj(user);

// 5)

const arr = [1, 2, 3, 4, 5];
function returnVal(getArr) {
  return getArr[4];
}
console.log(returnVal(arr));


