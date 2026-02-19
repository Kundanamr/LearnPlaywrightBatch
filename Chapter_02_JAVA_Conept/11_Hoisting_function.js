// Step 1 - Defining of the function

function getUserStatus() {

    console.log("status_code");
    var status_code = "Active";
    console.log(status_code);

}

// Step 2 - Calling of the function

getUserStatus();

// Note: var is function-scoped, so status is hoisted to
//the top of the getUserStatus (), Not the Globle scoped.