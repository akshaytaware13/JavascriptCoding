// If else

const userLoggeIn = true;
const debitCard = true;
if (userLoggeIn && debitCard && 2 == 2) {
  // console.log("correct");
} else {
  // console.log("wrong");
}


const age = 17;
if (age >= 18) {
  // console.log("You are eligible for vote");
}
else {
  // console.log("You are not eligible for vote");
}


//switch

// const month = 13;
// switch (month) {
//   case 1:
//     console.log("Janewary");
//     break;
//   case 2:
//     console.log("Feb");
//     break;
//   case 3:
//     console.log("Mar");
//     break;
//   case 4:
//     console.log("Apr");
//     break;
//   case 5:
//     console.log("May");
//     break;
//   case 6:
//     console.log("Jun");
//     break;

//   case 7:
//     console.log("Jul");
//     break;
//   case 8:
//     console.log("Aug");
//     break;
//   case 9:
//     console.log("sep");
//     break;
//   case 10:
//     console.log("Oct");
//     break;
//   case 11:
//     console.log("Nov");
//     break;
//   case 12:
//     console.log("Dec");
//     break;

//   default:
//     console.log("Not found");
//     break;
// }



// Nullish coalescing operator

let val1 = 5 ?? 10;
let val2 = null ?? 12;
let val3 = undefined ?? 25;
let val4 = null ?? 24 ?? 67;

// console.log(val1);
// console.log(val2);
// console.log(val3);
// console.log(val4);



// Ternary operator

// condition ? true:false;

const teaPrice = 30;

teaPrice >=40 ? console.log("Ok"):console.log("Not Ok");;