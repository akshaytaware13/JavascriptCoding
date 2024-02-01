


const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

const sayDate = function (str) {
  console.log(str,Date.now());
}

// const intervalId = setInterval(sayDate, 1000, 'Hi');
// clearInterval(intervalId);

start.addEventListener((str) => {
  var intervalId = setInterval(sayDate, 1000, "Hi");
 
})
 console.log(intervalId); 