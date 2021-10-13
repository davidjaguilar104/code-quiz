// variable pointing to the timer
var timerEl = document.getElementById("timer");

// variable pointing to the start quiz button 
var startButtonEl = document.getElementById("start-quiz");

// variable pointing to initial page
var startPageEl = document.getElementById("initial-page");

// variable pointing to the main element 
var mainEl = document.getElementById("main-page")

function createQuestionOne() {
    var questionOneEl = document.createElement("div");

    questionOneEl.innerHTML = 
    "<p class='question-font'> String is a commonly used data type. </p>"

    var questionIsTrue = document.createElement("div");
    questionIsTrue.textContent = "True";
    questionIsTrue.className = "question-answer-true";
    questionOneEl.appendChild(questionIsTrue);


    var questionIsFalse = document.createElement("div");
    questionIsFalse.textContent = "False";
    questionIsFalse.className = "question-answer-false";
    questionOneEl.appendChild(questionIsFalse);



    mainEl.appendChild(questionOneEl);
}


function countdown() {
    var timeLeft = 75;

    var timeInterval = setInterval(function() {
        if(timeLeft > -1) {
            timerEl.textContent = 'Time: ' + timeLeft;
            timeLeft--;
        }
    }, 1000);
}

startButtonEl.addEventListener("click" , function() {
    countdown();
    startPageEl.remove();
    createQuestionOne();
});