/// var , let, const//

// var - Function Scoped

var a = 10;
console.log(a);

1.    // Defination of thr Function//
function printHello() {
    console.log("Hello Kundan");
}

// calling the function///

//printHello();
//----------------------------------------------------------//
2.     // Defination of thr Function//

function printHello() {
    console.log("Hello Kundan");
    var a = 20;  //Local Scope
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a)   // it will print 30
    }
    console.log("F ->", a);   // F -> 30   - Function Scoped
}

// calling the function///

printHello();

