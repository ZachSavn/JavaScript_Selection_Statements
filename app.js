console.log("Hello World!\n==========\n");
console.log("Follow the steps in the README.md file to complete the exercises:\n==========\n");

// Exercise 1

/* Generating a random number between 0 and 10. */
let numAnswer = Math.floor(Math.random()*11);
let guess = prompt("Care to play a guessing game? If so, please enter a number between 1-10.");

//evaluate if guess is valid input
if (guess > 10 || guess < 1 || guess !== parseInt(guess)) {
    alert("Enter valid number 1 - 10");
} 

//evaluate guess to answer
if(guess < numAnswer) {
    alert("Too low!");
} else if (guess > numAnswer) {
    alert("Too high!");
} else {
    alert("Congratulations!!!");
}
console.log(numAnswer);
// Exercise 2

//switch statement practice
let userFavFood = prompt("What is your favorite food?");

switch (userFavFood) {
    case "pizza":
        prompt("I could definitely go for a slice!");
        break;
    case "burger":
        prompt("Same here! I'm always down for a burger run!");
        break;
    case "ramen":
        prompt("Have you tried adding ramen eggs? They take ramen to the next level!");
        break;
    case "spaghetti":
        prompt("Meatballs make or break that dish for me personally!");
        break;
    case "seafood":
        prompt("Seafood is my jam, from fish to mussels all are welcome!");
        break;
    default:
        prompt("Thank you for sharing with me!");
}