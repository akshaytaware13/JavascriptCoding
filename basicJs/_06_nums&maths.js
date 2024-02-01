const score = 100;

// console.log(score.toFixed(2));
// console.log(score.toString());
// const newString = score.toString();
// console.log(newString);
// console.log(typeof newString);

// const hundreds = 100000;
// console.log(hundreds.toLocaleString('en-IN'));
// console.log(hundreds.toLocaleString("en-IN"));


// ******************* Maths **********************************************

// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(3.2));
// console.log(Math.round(3.6));
// console.log(Math.ceil(7.1));
// console.log(Math.floor(8.1));
// console.log(Math.sqrt(100));

// console.log(Math.random());
// console.log((Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 10) + 1);

// const min = 10;
// const max = 20;
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);

//Dates
// let date = new Date();
// console.log(date);
// console.log(typeof date);
// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toJSON());
// console.log(date.toLocaleString());
// console.log(date.toString());

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());
// console.log(newDate.getMilliseconds());
// console.log(newDate.getMinutes());
// console.log(newDate.getSeconds());
// console.log(newDate.getTime());

newDate.toLocaleString('default', {
  weekday:"long"
})





