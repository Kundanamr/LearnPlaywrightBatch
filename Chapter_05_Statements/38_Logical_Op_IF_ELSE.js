
let username = "Dev";
let password = "secure123";
let isAccountLocked = false;

if ((username === "Dev" && password === "secure123") && !isAccountLocked) {
    console.log("Allowed to enter");
} else {
    console.log("not allwed to enter");
}
///// Ans --->  Allowed to enter


let username1 = "Dev";
let password1 = "secure123";
let isAccountLocked1 = true;

if ((username1 === "Dev" && password1 === "secure123") && !isAccountLocked1) {
    console.log("Allowed to enter");
} else {
    console.log("not allwed to enter");
}
///Ans ----> not allwed to enter
