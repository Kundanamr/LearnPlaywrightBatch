let a = "kundan";

if (true) {
    // console.log(a);  // ReferenceError!
    let a = "kumar";   /// Local variable  , TDZ end here
    console.log(a);   ///print kumar
}
console.log(a); /////kumar kundan



///--------------------other Example------

let b = 10;
console.log(b);
if (true) {
    console.log(b);   //// Local - blocked
    let b = 10;
}
