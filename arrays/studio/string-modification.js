const input = require('readline-sync');
let str = "LaunchCode";
//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
string = str.slice(0,3)
console.log(str.slice(3,10)+string)
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`This year's ${str} Web Development Program we are learning to 
use slice to create words like this ${str.slice(3,10)+string}`)
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let userInput=''; 
userInput= input.question("Enter number of letters: ")

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (userInput<10){
    console.log("To many letters")
    userInput=3
}
