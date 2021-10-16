Initial HTML and CSS built
Focus on functionality
Worry about styling later


Tasks needed to complete
<!-- 1. Clicking the start button starts timer countdown
- add event listener to the button to start the quiz 
- add a function to that event listener and have it start the counting down on the timer 

2. When start quiz button is clicked display the first question and get rid of starting content
- create function that dynamically generates the questions and answers
- this function also gets rid of initial content displayed when page is loaded 

3. Add function to remove question and present a new one when answered correct 
- added remove() to questionOneEl

4. Add a function to remove question, present a new one, and deduct 10 seconds from the time when answered incorrect 
- added remove() to questionOneEl
- deducted time by setting timeLeft -= 30;

5. Build the question 2
- generate a question dynamically after question one is answered and alert is clicked -->

7. Going to have to have to end quiz when timer hits zero or no more questions left
- clearInterval might be useful check other timer functions as well
- need to stop timer when all questions answered
- need to handle when user gets timer to hit 0
- look at timer in class repo for clearing interval
- check in all questions the time

8. View High Score instead of view high scores 
- only store one high score