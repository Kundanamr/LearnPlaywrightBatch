const { test, expect } = require('@playwright/test');

test('Check leap year', async ({ page }) => {

    let year = 2024;

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log("Leap Year");
    } else {
        console.log("Not Leap Year");
    }

});