// let - Block Scoped

let b = 20;    // Globle Scope
console.log(b);


// Defination of the function

function PrintHello() {
    console.log("Heloo kundan!");
    let b = 30; // Local Scope
    console.log(b);
    if (true) {
        let b = 40;
        console.log(b);    // Is 40 print.?    Nooooo

    }
    console.log("let ->", b); // It will Pront 30

}
// Call the funtion - 
PrintHello();



// let does NOT allow re-declaration in the same scope
// let b = 40; // Error: Identifier 'b' has already been declared
// let a = 10;
// let a = 10;
let a = 10;
a = 20;
console.log(a); // 20


// var nn = "kundan";
// let nn = "kundan";   // Error: Identifier 'nn' has already been declared

const name = "Rohan";
let age = 12;
let isTeen = age >= 13;   /// Wrong
let isTeen1 = age >= 12;   /// Correct

console.log(name);
console.log(age);
console.log(isTeen);
console.log(isTeen1);


let name1 = "Riya";
console.log("Hello," + name1);

/////////////////////////////////////////////////////////////////////

var age1 = 10;           // ✅ store a number 
console.log(age1);      // 10 

age1 = 25;             // ✅ change it anytime 
console.log(age1);    // 25 

age1 = 99;       // ✅ declare AGAIN? (allowed, but BAD!)
console.log(age1);  // 99


let score = 0;
console.log(score);     // 🎮 game starts, score = 0 
score = 10;
console.log(score);     // 10 // ✅ you scored! change it to 10 
score = 25;
console.log(score);     // 25 // ✅ scored again! change it to 25


//let score = 50;
//console.log(score); // ❌ ERROR! Already exists! ❌ Can't declare again in same scope: 



if (true) {
    let toy = "Car";  // lives inside this block 
    console.log(toy); // ✅ "Car"
}
//console.log(toy); // ❌ ERROR! toy is not accessible here


// Let's label every token in this line: // 
// let score = 100 + 5 ; // ^ ^ ^ ^ ^ ^ // KW IDENT OP LIT OP LIT 
let score1 = 100 + 5;
console.log(score1);     // 105


let price = 5;
let total = price + 1000;
console.log(total);