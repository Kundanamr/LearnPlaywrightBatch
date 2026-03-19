// let [first, second, third] = [10, 20, 30];

// console.log(first);
// console.log(second);
// console.log(third);


let [first, second, ...third] = [10, 20, 30, 40, 50];
console.log(first);
console.log(second);
console.log(third);


let results = ["pass", "fail", "pass"];
let counts = results.reduce((acc, r) => {
    acc[r] = (acc[r] || 0) + 1;
    return acc;
}, {});
console.log(counts.pass);