


// variable pointing to the timer
var timerEl = document.getElementById("timer");
function countdown() {
    var timeLeft = 75;

    var timeInterval = setInterval(function() {
        if(timeLeft > -1) {
            timerEl.textContent = 'Time: ' + timeLeft;
            timeLeft--;
        }
    }, 1000);
}


// variable pointing to the start quiz button 
var startButtonEl = document.getElementById("start-quiz");
startButtonEl.addEventListener("click" , function() {
    countdown();
});