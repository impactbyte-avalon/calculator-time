/************** LEVEL 0 ***************/
/*
second of a minutes = 60s * 1m   
minute of an hour = 60m * 1h     
hour of a day = 24h * 1d
day of a month = 30d * 1month
month of a year = 12month * 1y
*/
var newDateObject = new Date();


/************** LEVEL 1 ***************/
function secondsRightNow() { 
	var seconds;
		seconds = newDateObject.getSeconds();
	return seconds;
}

function minutesRightNow() { 
	var minutes;
		minutes = newDateObject.getMinutes();
	return minutes;
}

function hoursRightNow() { 
	var hours;
		hours = newDateObject.getHours();
	return hours;
}

function monthsRightNow() { 
	var months;
		months = newDateObject.getMonth();
	return months;
}

function yearRightNow() { 
	var years;
		years = newDateObject.getFullYear();
	return years;
}



/************** LEVEL 2 ***************/
//years to months
function yearsToMonths(years) {
	var months;
	months = (years * 12);
	return months;
}

//months to day
function yearsToMonths(years) {
	var months;
	months = (years * 12);
	return months;
}

//day to hour
function yearsToMonths(years) {
	var months;
	months = (years * 12);
	return months;
}

//hour to minutes
function yearsToMonths(years) {
	var months;
	months = (years * 12);
	return months;
}

//minutes to second
function yearsToMonths(years) {
	var months;
	months = (years * 12);
	return months;
}



/************** LEVEL 3 ***************/
//Calculate how old are you
function yourBirthDay(n) {      //Example ("8/1/1985")
	return birthDay = new Date(n);
}
var a = yourBirthDay(n)

 function todayIs() {
 	return today = new Date();
 }


 //Calculate your Age
 //YourAge = Today - Your Birth Day
 function yourAge() {
 	return today.getFullYear() - birthDay.getFullYear();
 }