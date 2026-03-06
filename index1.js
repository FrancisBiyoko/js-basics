// Assignment 1
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}


// Assignment 2
let day = "Friday";
let isMember = true;

switch(day) { 
    case "Monday":
        console.log("Monday Special: 50% off Espresso!");
        break;

    case "Wednesday":
        console.log("Wednesday Special: Buy one pastry, get one free!");
        break;

    case "Friday":
        console.log("Friday Special: Free cookie with every latte!");
        if (isMember) {
            console.log("Bonus for members: Double loyalty points!");
        }
        break;

    case "Saturday":
    case "Sunday":
        console.log("Weekend Special: All-day Brunch Menu!");
        break;

    default:
        console.log("Just our regular delicious menu today!");
}