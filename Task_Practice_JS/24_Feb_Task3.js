// a<>b  b<>c



/// ExperimentsL:- But sits wronge
// let a = 10, b = 8, c = 6

// if (a < b && a > b && b < c && b > c && c < a && c > a) { console.log("Scalan"); }
// else if (a < b || a > b || b < c || b > c || c < a || c > a) { console.log("Isoscales"); }
// else { console.log("Equaterial"); }


//// Correct one:---

let a = 10, b = 8, c = 6

if (a === b && b === c && c === a) {
    console.log("Equilateral")
}
else if (a !== b || b !== c || c !== a) {
    console.log("scalen")
}
else { console.log("Isoscales") }