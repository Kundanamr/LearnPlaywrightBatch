let year = 2005

if (year % 400 === 0) { console.log("Its Leap Year"); }
else if (year % 100 === 0) { console.log("Its not leap year") }
else if (year % 4 === 0) { console.log("Its leap Year") }
else { console.log("Not leap year") }

///-----------------------------------------------------------
let year1 = 2026;

if ((year1 % 4 === 0 && year1 % 100 !== 0) || (year1 % 400 === 0)) {
    console.log(year1 + " is a leap year.");
} else {
    console.log(year1 + " is not a leap year.");
}

