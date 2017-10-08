console.log("------------------------------------------");

console.log("level 0 - level 2");

var someMillisecondValue = 511111222127;
var date = new Date();
var minute = date.getMinutes();
var second = date.getSeconds();
var hour = date.getHours();
var day = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();

console.log(someMillisecondValue);
console.log("Date:", date);
console.log("Minute:", minute);
console.log("Second:", second);
console.log("Hour:", hour);
console.log("Day:", day);
console.log("Month:", month);
console.log("Year:", year);

console.log("------------------------------------------");

console.log("level 3");
//level3
var date = new Date("Saturday, February 9, 2008");
day = date.getDay();
document.write(day);

console.log(day);
