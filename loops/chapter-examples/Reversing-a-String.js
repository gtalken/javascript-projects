//"blue" is the string we want to reverse 
let str = "blue";
// The variable that we will eventually store the reversed value of 
let reversed = "";
//Here reversed is our accumulator variable
for (let i = 0; i < str.length; i++) {
    reversed = str[i]+ reversed;
}

console.log(reversed);
// Summing an Array
let numbers = [2, -5, 13, 42];
let total = 0;

for (let i = 0; i < numbers.length; i++) {
   total += numbers[i];
}