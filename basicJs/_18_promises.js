// First
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    //  console.log("Async Task is Complete");
    resolve();
  }, 2000);
});
promiseOne.then(function () {
  // console.log("Promise Consumed");
});


// Second
new Promise(function (resolve, reject) {
  setTimeout(function () {
    // console.log("Second Async task is complete");
    resolve();
  }, 1000);
}).then(function () {
  // console.log("Async task resolved");
})


// Third

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    //  console.log("Async Task three is Complete");
    resolve({userName:"Akshay", email:"Akshay@gmail.com"});
  }, 2000);
});
promiseThree.then(function (user) {
  // console.log(user);
});

// Four

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typecode.com.users");
    const data =await response.json();
    // console.log(data);
  } catch (error) {
    // console.log("E: ", error);
  }
}

getAllUsers(); 

// Five

fetch("https://jsonplaceholder.typecode.com.users")
  .then((response) => {
    return response.json()
  }).then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })