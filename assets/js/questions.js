// CREATE AN ARRAY OF QUESTIONS
// Questions will be objects. Each object has a question (string), multiple choice answers (array), and a correct answer indicated by index in array
// Note to self - will try if time allows to add automatic numbering to answer choices. For now, they are hard coded

var questions = [
    {   question: "Commonly used data types DO NOT include:",
        choices: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
        correctIndex:2
    },

    {   question: "The condition in an IF/ELSE statment is enclosed in:",
        choices: ["1. Quotes", "2. Curly Brackets", "3. Parenthesis", "4. Square Brackets"],
        correctIndex:1
    },

    {   question: "Arrays in Javascript can be used to store:",
        choices: ["1. Numbers and strings", "2. Other Arrays", "3. Booleans", "4. All of the above"],
        correctIndex:3
    },
    
    {   question: "String values must be enclosed in ______ when being assigned to variables:",
        choices: ["1, Commas", "2, Curly Brackets", "3, Quotes", "4, Parenthesis"],
        correctIndex:2
    },


    {   question: "A useful tool in development and debugging for printing content to the debugger is:",
        choices: ["1. JavaScript", "2. Terminal Bash ", "3. For Loops", "4. Console.log"],
        correctIndex:3
},

]