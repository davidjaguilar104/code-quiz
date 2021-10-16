// timer
var timeLeft = 75;

var timeInterval;

window.localStorage.getItem("highscore");


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

// function that creates question one
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





// variable pointing to question two element
var questionTwoEl = document.createElement("div");

// variable pointing to true 
var questionTwoIsTrue = document.createElement("div");

// variable pointing to false
var questionTwoIsFalse = document.createElement("div");


// function that creates question two
function createQuestionTwo() {
    

    questionTwoEl.innerHTML = 
    "<p class='question-font'> The condition in an if statement is enclosed in parentheses. </p>"

    
    questionTwoIsTrue.textContent = "True";
    questionTwoIsTrue.className = "question-answer-true";
    questionTwoEl.appendChild(questionTwoIsTrue);


    
    questionTwoIsFalse.textContent = "False";
    questionTwoIsFalse.className = "question-answer-false";
    questionTwoEl.appendChild(questionTwoIsFalse);



    mainEl.appendChild(questionTwoEl);
}




// variable pointing to question two element
var questionThreeEl = document.createElement("div");

// variable pointing to true 
var questionThreeIsTrue = document.createElement("div");

// variable pointing to false
var questionThreeIsFalse = document.createElement("div");


// function that creates question two
function createQuestionThree() {
    

    questionThreeEl.innerHTML = 
    "<p class='question-font'> An array is enclosed in square brackets. </p>"

    
    questionThreeIsTrue.textContent = "True";
    questionThreeIsTrue.className = "question-answer-true";
    questionThreeEl.appendChild(questionThreeIsTrue);


    
    questionThreeIsFalse.textContent = "False";
    questionThreeIsFalse.className = "question-answer-false";
    questionThreeEl.appendChild(questionThreeIsFalse);



    mainEl.appendChild(questionThreeEl);
}

// variable pointing to all done page
var allDoneEl = document.getElementById("all-done");

// variable pointing to initials form element
var initialsFormEl = document.getElementById("initials")

// variable pointing to submit btn
var submitButtonEl = document.createElement("button");

var inputEl = document.createElement("input");
inputEl.setAttribute("id", "user-initials");
inputEl.setAttribute("type", "text");
inputEl.setAttribute("placeholder", "Enter your initials");

// function that creates the all done page
function showAllDonePage() {
    allDoneEl.textContent = "All Done! Your final score is " + timeLeft;

    initialsFormEl.textContent = "Enter your initials: " 

    submitButtonEl.textContent = "Submit";
    


    initialsFormEl.appendChild(inputEl)
    initialsFormEl.appendChild(submitButtonEl);   
    allDoneEl.appendChild(initialsFormEl);



    submitButtonEl.addEventListener("click", function(event) {

        var userInitials = document.getElementById("user-initials");


        // object for highscore and initials
        var highscore = [{
            initials: userInitials.value.trim(),
            score: timeLeft
        }];
    
        event.preventDefault();

        localStorage.setItem("highscore", JSON.stringify(highscore));

        allDoneEl.textContent = "Refresh the browser and click start quiz to take again!"
    });
}

startButtonEl.addEventListener("click" , function() {
    // countdown function
    timeInterval = setInterval(function() {
        if(timeLeft > -1) {
            timerEl.textContent = 'Time: ' + timeLeft;
            timeLeft--;
        }
        if(timeLeft === -1) {
            questionOneEl.remove();
            questionTwoEl.remove();
            questionThreeEl.remove();
            showAllDonePage(); 
        }
    }, 1000);

    startPageEl.remove();
    createQuestionOne();
});

questionIsTrue.addEventListener("click", function () {
    alert("That is correct");
    questionOneEl.remove();
    createQuestionTwo();
})

questionIsFalse.addEventListener("click", function() {
    alert("That is incorrect");
    questionOneEl.remove();
    timeLeft -= 20;
    createQuestionTwo();
})

questionTwoIsTrue.addEventListener("click", function () {
    alert("That is correct");
    questionTwoEl.remove();
    createQuestionThree();
})

questionTwoIsFalse.addEventListener("click", function() {
    alert("That is incorrect");
    questionTwoEl.remove();
    timeLeft -= 20;
    createQuestionThree();
})

questionThreeIsTrue.addEventListener("click", function () {
    alert("That is correct");
    questionThreeEl.remove();
    showAllDonePage();
    clearInterval(timeInterval);
    timerEl.remove(); // removes the timer after displaying final score
})

questionThreeIsFalse.addEventListener("click", function() {
    alert("That is incorrect");
    questionThreeEl.remove();
    timeLeft -= 20;
    showAllDonePage();
    clearInterval(timeInterval);
    timerEl.remove(); // removes the timer after displaying final score
})

