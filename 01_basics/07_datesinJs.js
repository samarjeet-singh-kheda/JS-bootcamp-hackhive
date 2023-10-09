// Dates

let myDate = new Date();

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(typeof myDate); //object

// let myCreatedDate = new Date(2023, 0, 23); //yyyy-m-dd, month starts from 0 (jan)
// let myCreatedDate = new Date(0, 0, 0); // Sun Dec 31 1899

// let myCreatedDate = new Date(2023, 0, 23, 5, 3); //ridiculously high value or -ve value just adds to the common baseline
// Date(year, monthIndex, date, hours, minutes, seconds, ms)
// year & month must be defined

// let myCreatedDate = new Date("2023-01-14"); //month start from '1' in this
let myCreatedDate = new Date("10-08-2023"); //mm-dd-yyyy
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp); //1696869239236, date in ms from 1970 to now
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay()); //
// console.log(myCreatedDate.getDay()); //sunday-> 0, ...

// `${newDate.getDay()} and the time `

let date_dec = newDate.toLocaleString("default", {
  weekday: "long", //used for custom fomatting of date
  timeZoneName: "longGeneric", //ctrl + space
});
console.log(date_dec);
