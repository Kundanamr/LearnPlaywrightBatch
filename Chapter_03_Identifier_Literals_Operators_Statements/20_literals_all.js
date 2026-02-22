let count = 42;

let negative = -100;

let zero = 0;

let h = 0xFF;
let colour_hex = 0xFF0000;
console.log(colour_hex);

let octal = 0o77;

let float = 3.14159 //pi

let million = 1e6;
let tiny = 1.5e-4;

///Singles quotes//......
let single = 'Kundan';
//let single = 'Kundan's phone'--- we cant use single quotes bcz single quotes can be use in middle

//Double Quotes///...............
let double = "Hello Kundan";
let signle = "It's a test";

/// Templete Literals......./

let first_name = "Kundan";
let full_name = `Hi, ${first_name} kumar`;
console.log(full_name)

let math = `2 + 2 = ${2 + 2}`;
console.log(math)

/// I want to store the path of the file....
let path = "c: \\user\\kundan\\File.text"  /// fpr path use \\ double slash everywhere
console.log(path);

/// Use website--- reverse slash  /////

let address = "https://kundan.com/#login";
console.log(address);

let address1 = "https://app.vwo.com/#login";
console.log(address1)

// String literal edge cases
let empty = "";                          // empty string (falsy!)
let space = " ";                         // single space (truthy!)
let zero1 = "0";                          // string zero (truthy!)


let isLoggedIn = true;
let hasPermission = false;