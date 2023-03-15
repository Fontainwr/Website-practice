


// function changeId {
//    let new = document.getElementById("AnimeOthers");
//    New.innerText = "Hello"
//    console.log(new)
// }
























// NOTES: if statement/condition changes the global foo to a 2 

// let foo = 1;
// let condition = true;
// if (condition) {
//   let foo = 2;
//   console.log(foo);
// }
// console.log(foo);

//NOTE: if statement copies foo into a new 2 and prints 2
//but also foo is globaly set to 1 still = prints both


// let foo = 1;
// let condition = true;
// if (condition) {
//   foo = 2;
//   console.log(foo);
// }
// console.log(foo);



// NOTE: Error due to no global statment for foo but 
// it will print 3 for the if statment bucket for foo 
// let condition = true;
// if (condition) {
//   let foo = 3;
//   console.log(foo);
// }
// console.log(foo);




//NOTE: While loops problem 1 -to- 3 

// let number = 1;

// while ( number <= 6 ) {
//     console.log(number);
//     number = number + 1;
// }



// let number = 1;

// while ( number <=  100 ) {
//     console.log(number);
//     number = number + 1;
// }



// let theE = "E";

// while (theE.length < 40 ) {
//     theE = theE + "E";
// }

// console.log(theE)
// console.log(theE.length)


//NOTE: Flow of code. Runs in order. Skips line with if 
//statements. Repeats lines of code on a codition while loops. 

//NOTE: Code block = { } and is a sequence of related code. 
//..you can use () => {} to help "Fat Arrow" 
//..Example: let sayHello = () => { console.log("Hello!")};
//NOTE: How to run a block of code later? = via typing
//..SayHello();...this is now a "Function" = a piece of code
//..you run later.This helps you run multiple code if you want. 
//NOTE: "Functions" = Take data, Do something, return value 
//..



//= Go over functions like let name = (name, run)
//NOTE: (name, run) = these are arguments. And do these projects 
// Write a function that returns odd vs even number

// let isEven = (number) => {

// if (number % 2 == 0){
//     return true; 
// } else {
//     return false;
// }
// }

// console.log(isEven(134))






//Function Exercise 

// let max = (a, b) => {
//     if (a > b) {
//         return a;
//     }

//     else {
//         return b;
//     }
// }

// let biggerNumber = max(10,1232);
// console.log(biggerNumber)








// let min = (a, b) => {
//     if (a < b) {
//         return a;
//     }

//     else {
//         return b;
//     }
// }

// let smallerNumber = min(1023, 2231);
// console.log(smallerNumber)








// let celsiusToFahrenheit = (celsius) => {
//     let fahrenheit = celsius * 1.8 + 32;
//     return fahrenheit
// }

// console.log(celsiusToFahrenheit(48));


// let isEqual = (a,b) => {
//     if (a === b) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// console.log(isEqual(12122,12122));

// let applyTax = (price,tax) => {
//     total = price + price * tax; 
//     return total
// }

// console.log(applyTax(300, 0.1));







//#6 challenge for Function: Exercises 

// let asteriskCreator = (a) => {
//     let asterisk = "*"
//     asterisk = asterisk.repeat(a)
//     return asterisk
  
// }
// console.log(asteriskCreator(12))






//#7 challenge for Function: Exercises 



// length has the number of lines the triangle should have
// Enter the first for loop for the number of lines
// Enter the second loop to figure how
//  many *'s to print based on the current 
//  line number in i. So the 1st line will 
//  have 1 *, the second line will have 2 *s and so on.

// Add a newline after finishing printing the line and move to 
// the next line in the outer for loop
// Print an additional newline "\n" if desired.


//   let triangleCreator = (T) => {
//     let triangle = "";
//     for ( let i = 1; i <= T; i++) {
//         for ( let j = 1; j <= i; j++) {
//             triangle += "*";
//         }
//            triangle += "\n";
//     }
//     return triangle + "\n";
// }

// console.log(triangleCreator(5))
    













//NOTE: HTML = T = Text. Fundamentally built on
//on the idea of creating text documents. 

// <b> = adds tag to = bold 
// <i> = italic 
// <u> = underline 
// <s> = Strikethrough 
// to close a tag = </b>
// you can combind <b><i> as well. 
// <p> = paragraph 
// <h1> = Main header ...up the number to make sub-header
//metadata = gives info about a page for the header like a 
//link. and is sorounded bby the <head>
//<a>here<a> = for an anchor 
// setup a link = <p>Click <a href="http.//google.com">here</a>
//<img> = image = <img src=http:...">" NOTE: close tag is not needed 
//<ul> = helps with lists 
//NOTE: only text is needed. 


// HOMEWORK!!!!!: Work on html page more.