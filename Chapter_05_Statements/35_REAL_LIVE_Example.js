let isLoggedIn = true;
let userRole = "editor";
// app.vwo.com -> viewer, editor or admin -> 
// viwer = limited view
// editor can edit and view
// admin can do all the things

if (isLoggedIn) {
    if (userRole === "admin") {
        console.log("admin can do all the things");
    } else if (userRole === "editor") {
        console.log("Welcome Editor — Edit access granted.");
    } else if (userRole === "viewer") {
        console.log("Welcome Viewer — Read-only access.");
    } else {
        console.log("No idea which role you are !");
    }
} else {
    console.log("You are not logged in!!")
}


///// My style formate....

let isLoggedIn1 = true;
let userRole1 = "editor";
// app.vwo.com -> viewer, editor or admin -> 
// viwer = limited view
// editor can edit and view
// admin can do all the things

if (isLoggedIn1) {
    if (userRole1 === "admin") { console.log("admin can do all the things"); }
    else if (userRole1 === "editor") { console.log("Welcome Editor — Edit access granted."); }
    else if (userRole1 === "viewer") { console.log("Welcome Viewer — Read-only access."); }
    else { console.log("No idea which role you are !"); }
}
else { console.log("You are not logged in!!") }