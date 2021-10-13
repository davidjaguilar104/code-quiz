Initial HTML and CSS built
Focus on functionality
Worry about styling later


Tasks needed to complete
1. Clicking the start button starts timer countdown
- add event listener to the button to start the quiz 
- add a function to that event listener and have it start the counting down on the timer 

2. When start quiz button is clicked display the first question and get rid of starting content
- create function that dynamically generates the questions and answers
- this function also gets rid of initial content displayed when page is loaded 

3. Add function to remove question and present a new one when answered correct 
- added remove() to questionOneEl

4. Add a function to remove question, present a new one, and deduct 10 seconds from the time when answered incorrect 
- added remove() to questionOneEl
- need to deduct time
- want to be able to access the countdown function from everywhere