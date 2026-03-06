/// Grade Calculater...

//Write a program that calculates and displays the letter grade for a 
//given numerical score (e.g., A, B, C, D, or F) based on the following grading scale:

// A: 90 - 100 - BEST
// B: 80 - 89 - Better
// C: 70 - 79 - Good
// D: 60 - 69 - Avarage
// F: 0 - 59 - Poor

// Greater than both score give - "GOOD" -- score >= 70 && score <= 79)
let score = 84;

if (score >= 90 && score >= 100) { console.log("A. BEST") }
else if (score >= 80 && score >= 89) { console.log("B. BETTER") }
else if (score >= 70 && score >= 79) { console.log("C. GOOD") }
else if (score >= 60 && score >= 69) { console.log("D. Avarage") }
else { console.log("E. Poor") }

// Greater than and lesser than score gives - "E.Poor failed" -- score = 50 less than Avarage
let score1 = 50;

if (score1 >= 90 && score1 <= 100) { console.log("A. BEST") }
else if (score1 >= 80 && score1 <= 89) { console.log("B. BETTER") }
else if (score1 >= 70 && score1 <= 79) { console.log("C. GOOD") }
else if (score1 >= 60 && score1 <= 69) { console.log("D. Avarage") }
else { console.log("E. Poor failed") }

