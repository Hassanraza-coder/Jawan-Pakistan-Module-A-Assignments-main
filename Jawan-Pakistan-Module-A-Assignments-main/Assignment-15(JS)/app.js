//********************* Chapter 21 (Changing Case) ********************//

//***** Q1 *****//

// var allLower = userInput.toLowerCase();

//***** Q2 *****//

// var x = "Hello World";
// var x = x.toLowerCase();
// console.log(x);

// ***** Q3 *****//

// var y = "hello world";
// var y = y.toUpperCase();
// console.log(y);

// ***** Q4 *****//

// var a = "HELLO WORLD";
// var b = a.toLowerCase();
// console.log(b);

// ***** Q5 *****//

// var arr = ["Hello","World"];
// var chng = arr[0].toLowerCase();
// console.log(chng);

// ***** Q6 *****//

// var abc = "hello world";
// var abc = abc.toUpperCase();
// alert(abc)

// ***** Q7 *****//

// var cityName = "kaRacHi";
// var cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
// alert(cityName)


//********************* Chapter 22 - 25 (Strings) ********************//

//***** Q1 *****//

// var sameWord = "captain"
// var sameWord = sameWord.slice(1,3)
// alert(sameWord)

//***** Q2 *****//

// var abc = "Hello World"
// var abc = abc.length
// alert(abc)

// ***** Q3 *****//

// var animal = "elephant"
// var seg = animal.slice(2,6)
// alert(seg)

// ***** Q4 *****//

// var a = "hello world"
// var b = a.length
// alert(b)

// ***** Q5 *****//

// var abc = "Hello World"
// var abclength = abc.length
// var midChar = abc.slice(1,8)

// console.log(abclength)
// console.log(midChar)

// ***** Q6 *****//

// var text = "To be or not to be.";
// var indx = text.indexOf("be");
// console.log(indx)
// Index will be 3

// ***** Q7 *****//

// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// console.log(indx)
// Index will be 16

// ***** Q8 *****//

// var abc = "go"
// var abc1 = abc.indexOf("go")
// console.log(abc1)
// Index will be 0

// ***** Q9 *****//

// if (text.charAt(indexNum) !== undefined) {}

// ***** Q10 *****//

// Ans is "c"

// ***** Q11 *****//

// var abc = "Pakistanians"
// var cha = abc.charAt(9)
// console.log(cha)

// ***** Q12 *****//

// var str = "Hello World";
// var x = str.charAt(str.length - 1);
// console.log(x); 

// ***** Q13 *****//

// var input = "Hello World"
// var cha = input.charAt(4)
// console.log(x); 

// ***** Q14 *****//

// if (str.charAt(2) === 'X') {}

// ***** Q15 *****//

// var str = "Hello, World!";
// var charArray = [];
// for (var i = 0; i < str.length; i++) {
//     charArray.push(str.charAt(i));
// }
// console.log(charArray);

// ***** Q16 *****//

// var str = "There are 1 apples and 2 oranges.";
// var newStr = str.replace("1", "one");
// console.log(newStr);

// ***** Q17 *****//

// var x = "This is an example with  some 'a' characters.";
// var y = x.replace(/a/g, "z");
// console.log(y);


//*************** Chapter 26 (Rounding Numbers) ***************//

// ***** Q1 *****//

// var roundedNumber = Math.round(3.7);
// console.log(roundedNumber)

// ***** Q2 *****//

// var origNum = 3.2;
// var roundNum = Math.ceil(origNum);
// console.log(roundNum);

// ***** Q3 *****//

// var origNum = 3.8;
// var roundNum = Math.floor(origNum);
// console.log(roundNum);

// ***** Q4 *****//

// var originalNumber = 3.7;
// var roundedNumber = Math.round(originalNumber);
// console.log(roundedNumber);

// ***** Q5 *****//

// var originalNumber = 0.5;
// var roundedNumber = Math.round(originalNumber);
// console.log(roundedNumber);



//*************** Chapter 27 (Random Numbers) ***************//


// ***** Q1 *****//

// var random = Math.random();
// var randomNumberInRange = Math.floor(random *50);
// console.log(randomNumberInRange);

// ***** Q1 *****//

// var randomValue = Math.random(); 
// console.log(randomValue);

// ***** Q2 *****//

// var randomNumber = Math.floor(Math.random() * 6) + 1;
// console.log("You rolled a " + randomNumber);

// ***** Q3 *****//

// var randomNumber = Math.floor(Math.random() * 2);
// var result = (randomNumber === 0) ? "Heads" : "Tails";
// console.log("The coin landed on: " + result);

//*************** Chapter 28, 29 (Converting Strings) ***************//



// ***** Q1 *****//

// var str = "456";
// var num = Number(str);
// console.log(num); 

// ***** Q2 *****//

// var str = "123";
// var num = parseInt(str);
// console.log(num);

// ***** Q3 *****//

// var str = "3.14159";
// var floatNum = parseFloat(str);
// console.log(floatNum); 

// ***** Q4 *****//


// ***** Q5 *****//

// var number = 123;
// var str = number.toString();
// console.log(str);

// ***** Q6 *****//


// var number = 42;
// var str = number.toString();
// console.log(str);

// ***** Q7 *****//

// var decimalString = "3.14";
// var integerNumber = parseInt(decimalString);
// console.log(integerNumber);

//*************** Chapter 30 (Controlling the length of decimals) ***************//


// ***** Q1 *****//

// var num = 3.14159265359; 
// var newNum = num.toFixed(4).toString();
// console.log(newNum);

// ***** Q2 *****//

// var num = 3.14159265359; 
// num = parseFloat(num.toFixed(2));
// console.log(num);

// ***** Q3 *****//





























