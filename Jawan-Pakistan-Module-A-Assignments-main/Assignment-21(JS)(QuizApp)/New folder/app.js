var questions = [
    {
        question: "How to write an IF statement in JavaScript?",
        option1: "if (i == 5)",
        option2: "if i == 5 then",
        option3: "if i = 5 then",
        correctAns: "if i = 5"
    },
    {
        question: "How do you create a function in JavaScript?",
        option1: "function myFunction()",
        option2: "function:myFunction()",
        option3: "function = myFunction()",
        correctAns: "function myFunction()"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        option1: "alert('Hello World');",
        option2: "alertBox('Hello World');",
        option3: "msg('Hello World');",
        correctAns: "alert('Hello World');'> "
    },
    {
        question: "The external JavaScript file must contain the <script> tag.",
        option1: "True ",
        option2: "Non of Them",
        option3: "False ",
        correctAns: "False"
    },
    {
        question: "How do you call a function named 'myFunction'?",
        option1: "myFunction()",
        option2: "call myFunction()",
        option3: "call function myFunction()",
        correctAns: "myFunction()"
    },
    {
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        option1: "if (i != 5)",
        option2: "if (i <> 5)",
        option3: "if i =! 5 then",
        correctAns: "if (i != 5)"
    },
    {
        question: "How does a WHILE loop start?",
        option1: "while (i <= 10; i++)",
        option2: "while (i <= 10)",
        option3: "while i = 1 to 10",
        correctAns: "while (i <= 10)"
    },
    {
        question: "How can you add a comment in a JavaScript?",
        option1: "//This is a comment",
        option2: "!--This is a comment-->",
        option3: "'This is a comment",
        correctAns: "//This is a comment"
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        option1: "var colors = (1:'red', 2:'green', 3:'blue')",
        option2: "var colors = 'red', 'green', 'blue'",
        option3: "var colors = ['red', 'green', 'blue']",
        correctAns: "var colors = ['red', 'green', 'blue']"
    },
    {
        question: "How do you round the number 7.25, to the nearest integer?",
        option1: "Math.rnd(7.25)",
        option2: "round(7.25)",
        option3: "Math.round(7.25)",
        correctAns: "Math.round(7.25)"
    },
];

var ques = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var indexValue = 0;
var score = 0;

function getQuestion() {
    ques.innerHTML = questions[indexValue].question;
    opt1.innerHTML = questions[indexValue].option1
    opt2.innerHTML = questions[indexValue].option2
    opt3.innerHTML = questions[indexValue].option3
    indexValue++
} 
getQuestion()
