var a = 1000;
let b = 300;
const c = 500;
if (true) {
  var a = 10;
  let b = 20;
  const c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c);


function one() {
  const username = "Akshay";

  function two() {
    const website = "www.google.com";
    // console.log(username);
  }
  // console.log(website);

  two();
}

one();




if (true) {
  const userName = "Abhiraj";
  if (userName === "Abhiraj") {
    const website = "  youtube";
    // console.log(userName + website);
  }
  // console.log(website);
}
// console.log(userName);