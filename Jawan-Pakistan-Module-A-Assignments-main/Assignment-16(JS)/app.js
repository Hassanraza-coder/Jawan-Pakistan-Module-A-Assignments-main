// ********** Function********//
// Q1

// function dateTime(){
//     var curTime = new Date()
//     console.log(curTime)
// }
// dateTime()

// Q2
// function greet(first,last){
//     console.log("Welcome"+ " "+ firstName + " " + lastName)
// }
// var firstName = prompt("Enter your first name")
// var lastName = prompt("Enter your last name")
// greet(firstName,lastName)

// Q3

// function sum(a,b){
//     var sum = a + b
//     console.log(sum)
// }
// var frstNum = +prompt("Enter the first number")
// var scndNum = +prompt("Enter the Second number")
// sum(frstNum , scndNum)

// Q4
// function calculation(num1,opr,num2){
//     if(opr === "+"){
//         console.log(num1 + num2)
//     }else if (opr === "-"){
//         console.log(num1 - num2)
//     }else if(opr === "/"){
//         console.log(num1 / num2)
//     }else if(opr === "*"){
//         console.log(num1 * num2)
//     }
// }
// var num1 = +prompt("Enter the first Number")
// var operator = prompt("Enter the Operator")
// var num2 = +prompt("Enter the Second Number")

// calculation(num1,operator,num2)

// Q5
// function square(number) {
// var num = number * number;
// return num // Short hand write below
// return number * number
// }

// var result = square(5); 
// console.log(result);

// Q6
// function factorial(num) {
//     if (num > 0) {
//         for (var i = userdata; i >= 1; i--) {
//             return num * i
//         }
//     } else {
//         console.log("Kindly Enter Valid Number")
//     }
// }
// var userdata = +prompt("Enter a Number")
// var result = factorial(userdata)
// console.log(result)

// Q7
// function counting(userdata,userdata1){
//     var counts = []
// for(var i = userdata; i <= userdata1  ; i++){
//     counts.push(i)
// }
// return counts
// }
// var userdata = +prompt("Enter a number to start counting")
// var userdata1 = +prompt("Enter a number to end counting")
// var result = counting(userdata,userdata1)
// console.log(result)
// Q8


// Q9
// function calculate(width, height) {
//     var area = width * height;
//     return area;
// }

// var area1 = calculate(5, 8);
// console.log("Area with values as arguments: " + area1);

// Q10
// var userInput = prompt("Enter a word..");

// var check = "";

// for (var i = userInput.length - 1; i >= 0; i--) {
//   check = check + userInput[i]
// }

// if (userInput === check) {
//   console.log("it is a palindrome word");
// } else {
//   console.log("it is not a palindrome word");
// }

// for(var i =0;i<=10;i++){

// }
// Q11
// function capitalizeWords(inputString) {

//     var words = inputString.split(" ");


//     for (var i = 0; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }

//     // Join the words back into a string
//     var capitalizedString = words.join(" ");

//     return capitalizedString;
// }
// var inputString = prompt("enter the words");
// var result = capitalizeWords(inputString);
// console.log(result); 

// Q12
// function findLongestWord(inputString) {

//     var words = inputString.split(" ");


//     var longestWord = "";
//     var maxLength = 0;


//     for (var i = 0; i < words.length; i++) {
//         var currentWord = words[i];
//         if (currentWord.length > maxLength) {
//             maxLength = currentWord.length;
//             longestWord = currentWord;
//         }
//     }

//     return longestWord;
// }

// var inputString = prompt("enter the words");
// var result = findLongestWord(inputString);
// console.log(result);

// Q13
// function countOccurrences(inputString, letter) {
//     var count = 0;
    
//     for (var i = 0; i < inputString.length; i++) {
//         if (inputString.charAt(i) === letter) {
//             count++;
//         }
//     }
    
//     return count;
// }

// var inputString = 'JSResourceS.com';
// var letterToCount = 'o';
// var result = countOccurrences(inputString, letterToCount);
// console.log("Number of occurrences of '" + letterToCount + "' in the string: " + result);

    