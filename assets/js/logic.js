//THIS IS ALL THE LOGIC FOR THE CODE QUIZ

//DECIDE WHAT VARIABLES I NEED (Pseudocode)
//timer
//start the quiz
//questions
//checkAnswer
//finalScore
//nextQuestion
//initals
//submit



// FROM HTML Files - I need these variables to correspond
var timerEl = document.getElementById("time");
var startButton = document.getElementById("start");
var questionsContainer = document.getElementById("questions");
var endScreen = document.getElementById("end-screen");
var finalScoreEl = document.getElementById("final-score");
var initialsInput = document.getElementById("initials");
var submitButton = document.getElementById("submit");

// NOT SURE IF THESE WILL WORK BUT GIVE IT A GO.  ADDING SOUNDS TO ANSWERS
var correctSound = new Audio("../sfx/correct.wav");
var incorrectSound = new Audio("../sfx/incorrect.wav");

//Need these to track questions and timer
var currentQuestionIndex = 0;
var time = 0;

// Need to run a clock depending on time taken to answer Qs and deduct 10 sec for wrong answer
var timerInterval;

// Click startButton to start the quiz
startButton.addEventListener("click", startQuiz);

// Function to start the quiz
function startQuiz() {
  time = 60; // Set initial time in seconds
  currentQuestionIndex = 0; //Display first Question

  // Hide start screen and show questions container
  document.getElementById("start-screen").classList.add("hide");
  questionsContainer.classList.remove("hide");

  // Start timer
  startTimer();

  // Display the first question
  displayQuestion();
}

// Function to start the timer
function startTimer() {
  timerInterval = setInterval(function () {
    if (time > 0) {
      time--;
      timerEl.textContent = time;
    } else {
      endQuiz();
    }
  }, 1000);
}

  // Function to display a question
  function displayQuestion() {
    var currentQuestion = questions[currentQuestionIndex];

    // Display question title
    document.getElementById("question-title").textContent =
      currentQuestion.question;

    // Display answer choices
    var choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = ""; //changes container to display the multiple choice options for that question

    currentQuestion.choices.forEach(function (choice, index) {
      var choiceButton = document.createElement("button");
      choiceButton.textContent = choice;
      choiceButton.addEventListener("click", function () {
        checkAnswer(index);
      });
      choicesContainer.appendChild(choiceButton);
    });
  }

  // Function to check the selected answer
  // Note to self: Try to add the .wav files provided to alert correct and incorrect annsers
  function checkAnswer(choiceIndex) {
    var currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion.correctIndex === choiceIndex) {
      // Correct answer, move to the next question
      displayFeedback("Correct! Now for your next question");
      correctSound.play();
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        displayQuestion();
      } else {
        endQuiz();
      }
    } else {
      // If wrong answer, show message and deduct 10 secs
      displayFeedback("Incorrect! 10 seconds deducted from score");
      incorrectSound.play();
      time -= 10;
    }
  }

  // Function to display feedback
  function displayFeedback(message) {
    var feedbackEl = document.getElementById("feedback");
    feedbackEl.textContent = message;
    feedbackEl.classList.remove("hide");
    setTimeout(function () {
      feedbackEl.classList.add("hide");
    }, 1000);
  }

  // Function to end the quiz
  function endQuiz() {
    clearInterval(timerInterval);

    // Hide questions container and show end screen
    questionsContainer.classList.add("hide");
    endScreen.classList.remove("hide");

    // Display final score - final score is based on the seconds remaining on the timer 
    finalScoreEl.textContent = time;
  }

  // Function to handle submit button click
  submitButton.addEventListener("click", function () {
    var initials = initialsInput.value.trim();
    if (initials !== "") {
      // Save score and initials to localStorage
      var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
      var scoreData = { initials: initials, score: time };
      highscores.push(scoreData);
      localStorage.setItem("highscores", JSON.stringify(highscores));

      // Link to highscores page
      window.location.href = "highscores.html";
    }
  });

