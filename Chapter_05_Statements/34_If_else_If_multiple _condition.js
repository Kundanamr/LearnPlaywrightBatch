let age = 25;

if (age > 25) { console.log("Go to gao and drink also") }
else if (age >= 18 && age <= 25) { console.log("You can go to goa but can't drink") }
else { console.log("Go to home and watch pogo") }
////"You can go to goa but can't drink"


if (age > 25) { console.log("Go to gao and drink also") }
else if (age >= 18 && age < 25) { console.log("You can go to goa but can't drink") } /// remove = from <
else { console.log("Go to home and watch pogo") }
///"Go to home and watch pogo"


let score = 78;

if (score >= 90) {
    console.log("Grade: A — Excellent");
} else if (score >= 80) {
    console.log("Grade: B — Good");
} else if (score >= 70) {
    console.log("Grade: C — Average");   ////// Anwer correct...
} else if (score >= 60) {
    console.log("Grade: D — Below Average");
} else {
    console.log("Grade: F — Fail");
}