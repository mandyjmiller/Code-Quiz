//THIS SCRIPT WILL HANDLE HOW THE SCORES ARE CALCULATED, DISPLAYED, AND WRITTEN TO LOCAL STORAGE


//Actual queries needed for Code Quiz
    // Variables
    var highscoresList = document.getElementById("highscores");
    var clearButton = document.getElementById("clear");
  
    // Load highscores from storage and display them if they already exists
    loadHighscores();
  
    // Function to load and display highscores
    function loadHighscores() {
      // Retrieve highscores from storage
      var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
  
      // Clear existing highscores
      highscoresList.innerHTML = ""; // clears the entire contents of HTML
  
      // Display highscores
      highscores.forEach(function (score, index) {
        var li = document.createElement("li");
        li.textContent = `${index + 1}. ${score.initials}: ${score.score}`;
        highscoresList.appendChild(li); //adds new list item when new score is added
      });
    }
  
    // Function to clear highscores from localStorage
    clearButton.addEventListener("click", function () {
      // Clear highscores from storage
      localStorage.removeItem("highscores");
  
      // Reload and display highscores
      loadHighscores();
    });
  ;

