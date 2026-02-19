//console.log(name);   ---it will show -- Not Undefined  -
// ---- because nothing is define for namr

//console.log(name);  ---it will show -- Undefined - It will only show if you set (name)
// var name = "Kundan";
// console.log(name);   ///Result  Kundan 

// console.log(a);
// let a = "Kundan";
// console.log(a);

//----Phase 1: Memory Creation----
var a = undefined;
var b = undefined;

// ---- Phase 2: Execution ----
console.log(a); // undefind
var a = "Kundan";
console.log(a); // changed