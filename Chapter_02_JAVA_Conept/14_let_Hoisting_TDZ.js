/// ------------Example 1------------
// {
//   // ----TDZ for "score" starts here----
//   console.log(score);  // ReferenceError!
//   score = 50;          // ReferenceError!
//   typeof score;        // ReferenceError!
//   ----TDZ for "score" ends here----
//  //   let score = 100;        // Declaration reached, TDZ ends
//   //  console.log(score);     // 100 (safe to access now)
// }



/// ------------Example 2------------ 

//console.log(username);

console.log("Kundan hi1");
console.log("Kundan hi2");
console.log("Kundan hi3");
console.log("Kundan hi4");
let username = "Kumar";    //// assigned a value to username
console.log("Kundan hi5");
console.log("Kundan hi6");
console.log("Kundan hi7");
console.log("Kundan hi8");
console.log(username);


/// ------------Example 3------------ 

