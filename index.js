//Level 0
//Prepare all basic time operations you already learnt with just utilizing number
//For example, determine how to get value of seconds, minutes, hours, days, months, years based on different time
var dt = new Date();

//Level 1
//Prepare time operations with `Date` object
//Get different kind desired values through the built-in methods

// Display the month, day, and year. getMonth() returns a 0-based number.
var month = dt.getMonth()+1;
var day = dt.getDate();
var year = dt.getFullYear();
document.write(month + '-' + day + '-' + year);

//Level 2
//Wrap those operations into different kind functions
//Learn which way is the best to calculate time dimension
//calculating elapsed time
var startTime = new Date('1/1/2000');
var startMsec = startTime.getMilliseconds();
startTime.setTime(5000000);
var elapsed = (startTime.getTime() - startMsec) / 1000;
document.write(elapsed);


//Level 3
//Experiment to create variation and call some chain of different functions in other functions
//finding user's age
var birthday = new Date("9/2/1995");
var today = new Date();
var years = today.getFullYear() - birthday.getFullYear();

// Reset birthday to the current year.
birthday.setFullYear(today.getFullYear());

// If the user's birthday has not occurred yet this year, subtract 1.
if (today < birthday)
{
    years--;
}
document.write("You are " + years + " years old.");
