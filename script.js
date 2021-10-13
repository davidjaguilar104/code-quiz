// variable pointing to the timer
var timerEl = document.getElementById("timer");

// variable pointing to the start quiz button 
var startButtonEl = document.getElementById("start-quiz");

// variable pointing to initial page
var startPageEl = document.getElementById("initial-page");

// variable pointing to the main element 
var mainEl = document.getElementById("main-page")

// variable pointing to question element
var questionOneEl = document.createElement("div");

// variable pointing to true 
var questionIsTrue = document.createElement("div");

// variable pointing to false
var questionIsFalse = document.createElement("div");

function createQuestionOne() {
    

    questionOneEl.innerHTML = 
    "<p class='question-font'> String is a commonly used data type. </p>"

    
    questionIsTrue.textContent = "True";
    questionIsTrue.className = "question-answer-true";
    questionOneEl.appendChild(questionIsTrue);


    
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

questionIsTrue.addEventListener("click", function () {
    alert("That is correct");
})

questionIsFalse.addEventListener("click", function() {

})