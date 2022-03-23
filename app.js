console.log("Hello World!\n==========\n");
console.log("Follow the steps in the README.md file to complete the exercises:\n==========\n");

// Exercise 1
let favoriteNumber = 7;

let userInput = window.prompt("Guess my lucky number")

if(userInput < favoriteNumber){
    alert("Too Low!")
} else if(userInput > favoriteNumber){
    alert("Too High!")
} else{
    alert("Congratulation!!!")
}

// Exercise 2
let color = window.prompt("What's your favorite color?")

switch(color){
    case "purple":
        alert("That's my wife's favorite color too!")
        break;
    case "red":
        alert("That's my best friend's favorite too!")
        break;
    case "blue":
        alert("That's my favorite too!")
        break;
    case "green":
        alert("That color reminds me of new life!")
        break
    case "black":
        alert("Black as night, eh?")
        break
    default:
        alert("That is a beautiful color!")
}