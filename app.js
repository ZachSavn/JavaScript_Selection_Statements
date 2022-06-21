console.log("Hello World!\n==========\n");
console.log("Follow the steps in the README.md file to complete the exercises:\n==========\n");

// Exercise 1

/* Generating a random number between 0 and 10. */
let numAnswer = Math.floor(Math.random()*11);
console.log(numAnswer);
let guess = prompt("Care to play a guessing game? If so, please enter a number between 1-10.");

/* This is an if/else statement. If the guess is less than the number answer, it will alert "Too low!"
If the guess is greater than the number answer, it will alert "Too high!" If the guess is equal to
the number answer, it will alert "Congratulations!!!" */
if(guess < numAnswer) {
    alert("Too low!");
} else if (guess > numAnswer) {
    alert("Too high!");
 } else {
    alert("Congratulations!!!");
 }
// Exercise 2
