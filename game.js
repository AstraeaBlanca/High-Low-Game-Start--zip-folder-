let randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess;
let attempts = 0;

// Prompt user for a number between 1 and 10, or type 999 to exit.
let numRange = Number(prompt("Enter a number between 1 and 10, or type 999 to exit. "));
// Create while loop that continues for as long as the user guesses are incorrect.
// Loop should count the number of guesses.
// Loop should exit if user enters 999 and not display "Too high!"
// If the guess is too low, the user should be promped "Too low!" and be able to guess again.
// If the guess is too high, the user should be promped 'Too high!" and be able to guess again.
// If anything else is entered, the user should be prompted that their input is invalid and 
// to guess again.
while((numRange != randomNumber) && numRange != 999) {
    attempts += 1;

    if(numRange > randomNumber) {
        alert("Number is too high! ");
    } else {
        alert("Number is too low! ");
    }

    numRange = Number(prompt("Enter a number between 1 and 10, or type 999 to exitl. "));
}
// If the guess is correct, the user should be alerted of their win and 
// be told the number of guesses they made.

alert("Correct! You made " + attempts + " guesses!");