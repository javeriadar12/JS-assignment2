// -------------question 1------------
// write a javascript program that accepts two numbers in two prompts and displays the 
// larger one in the console.

// Prompt user for two numbers
// let num1 = +prompt("Enter 1st number:");
// let num2 = +prompt("Enter 2nd number:");

// if(num1 > num2){
//   console.log("The Larger number is " +num1);
// }

// else(num2 > num1){
//   console.log("The larger number is " +num2);
// }

// ------------------question 2---------------
// write a javascript conditional statement to find the sign of a number.
// Display an alert box with the specified sign.

// let num = +prompt('write an integar number:');

// if(num>=0){
// alert("The number have +ve sign:");
// }

// else{
//   alert("The number have -ve sign: ");
// }

// --------question 3-----------
// write a javascript program that accepts five numbers in five prompts
// and displays the larger one in the console.


// let num1 = +prompt("Enter the first number:");
// let num2 = +prompt("Enter the second number:");
// let num3 = +prompt("Enter the third number:");
// let num4 = +prompt("Enter the fourth number:");
// let num5 = +prompt("Enter the fifth number:");

// let max = num1;

// if (num2 > max) {
//   max = num2;
// }

// if (num3 > max) {
//   max = num3;
// }

// if (num4 > max) {
//   max = num4;
// }

// if (num5 > max) {
//   max = num5;
// }

// console.log("The largest number is: " + max);


// ---------------question 4----------
// write a javscript for loop that will iterate from 0 to 15. for eachiteration
// it will check if the current number is odd or even,and display a message to the screen.

// for(let i=1;i<16;i++){
//   if(i%2===0){
//     console.log(i+ "this is even number");
//   }
//   else{
//     console.log(i+ "this is odd number");
//   }
// }

// ---------------question 5---------------
// write a javascript program which computes the average marks of the following students
// then,this average is used to determine the corresponding grade

// let marks=+prompt("enter your marks: ");
// if (marks>=90){
//   console.log("A grage..");
// }
// else if(marks>=80){
//   console.log("B grade...");
// }
// else if(marks>=70){
//   console.log("C grade..");
// }
// else if(marks>=60){
//   console.log("D grade...");
// }
// else{
//   console.log("F grade...");
// }

// -----------question 6------------
// write a javascript program which iterates the integers from 1 to 100 but for multiples 
// of three print "Fizz" instead of the number and for the multiples of five print"Buzz".
// for numbers which are multiples of both three and five print "FizzBuzz".

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// -------------question 7----------
// write a javascript program to constructor the following pattern, using a nested for loop.

for (let i = 1; i <= 5; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "* ";
  }
  console.log(pattern);
}


