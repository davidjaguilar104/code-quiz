// variable pointing to the timer
var timerEl = document.getElementById("timer");

// variable pointing to the start quiz button 
var startButtonEl = document.getElementById("start-quiz");

// variable pointing to initial page
var startPageEl = document.getElementById("initial-page");



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
});