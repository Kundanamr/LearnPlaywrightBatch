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

