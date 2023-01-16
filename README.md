# MasterMind

## Installation

### Requirements

- React version 18
- Ruby 2.7.4
- Rails 7.0.4

### Application Instructions

1. Clone this repository and open in your IDE of choice.
2. Navigate to root of repo in your terminal and run "npm bundle install"
3. Run "sudo service postgresql start" to get your database up and running
4. Run "rails s" to start up the backend server
5. Open a new terminal and navigate to the client folder
6. Run "npm start" to open the application in your localhost

### Game Instructions

- You have 10 attempts to correctly guess the sequence of 4 colors in the correct order.
- After submitting a guess, you will be presented with clues as to whether you are close to the correct answer.
- If all colors are incorrect then "all incorrect" will be displayed.
- "Correct" refers to the number of colors that are correct and also in the correct position.
- "Partial" refers to the number of colors that are correct but not in the correct position in the pattern.
- Note: Colors can repeat in the pattern

## MVP

### As a user:

- I should be able to select 4 values, between 0 and 7, and receive feedback on my guess
- I expect my feedback to tell me how many numbers were correct, and how many numbers were correct and in the right location, and how many were incorrect
- I should be able to make a guess, see my guess and feedback history, and see my remaining attempt count
- I expect to have 10 attempts to guess the code

### Implementation Requirements

Must use Random generator API (https://www.random.org/clients/http/api/) to randomly select 4 numbers from 0 ~ 7 (Duplicate numbers are allowed)

## Stretch Goals

- Change format of game from guessing 4 digit number combinations to sequence of 4 colors (easier on the eyes when playing a game)
- Add button that opens pop-up modal to display rules of the game
- Add count-up timer to keep track of how many seconds have passed while playing

### Backend Stretch Goals

- Implement a Ruby on Rails backend running on PostGreSQL to create a high scores database for the game
- When a player wins the game a pop-up modal will display on the screen showing the number of tries and the number of seconds it took the player to win the game
- Players can submit their scores by typing in a name (arcade-style: max 3 characters)
- High Scores button in the screen will display pop-up Modal of the top 5 high scores of all time. Ordered by number of tries, and then by number of seconds.


## Game Play Logic

1. As soon as page loads, player is presented with the game board. The game board consists of the color pallette, a running stopwatch, number of attempts counter, and a row of pegs. There are also 2 buttons at the top to view rules and high scores. On page refresh, a GET request is made to a random number generator api which will bring back a random 4 digit number using digits 0-7. This number is then converted into an array of colors, with each number being represented by a specific color. This array of colors is then saved, in state, as the variable "answer."
2. "selectedColor is also a variable state which defaults to "white" on page load. When the player selects a color from the pallette, it will re-render the page and the displayed selected color will change. If a player clicks on a square in the peg row, the class name of that particular square will change to match the color of the selectedColor. When the player has their first guess ready, they click the "check" button to submit their guess. 
3. Once a guess is submitted, several steps take place within the application. First the guess is saved to an array to be compared with the answer array from the state. The guess array is iterated through twice. The first time it is checking for an exact match of color and index position within the 2 arrays. For each exact match, a new variable, correctPositions is incremented by 1. For the second iteration, a copy of the answer array is created and checked to see if each color in the guess array is included within the answerCopy. For each color match, a new variable, correctColors, is incremented by 1. Then that color is spliced from the answer copy and replaced with an “x” so that no color is counted multiple times if that color is in the answer only once.
4. After the two iterations, the response variable is created, with conditionals regarding the string displayed in the response, based on the value of the two variables, correctPositions and correctColors. Once the response has been generated, several functions are called to progress the game play.
5. setHint and setClue will display the response, which gives the player clues to the answer based on their guess. addPeg function will run to add a new row to the game board for the player to make their next guess. decrementAttempts will run to decrement the number of attempts remaining on screen. And finally, didPlayerWin will run with the response variable given as an argument. If the response is equivalent to “You win!” then the winScreen modal will be displayed on the screen. 
6. The number of peg rows that are displayed on the screen is controlled by the state variable pegCount. If the pegCount ever reaches the number 11, and the winScreen is not open, then the loseScreen modal will be displayed, letting the player know that they have run out of guesses.
7. Both the winScreen and loseScreen modals will display the “play again” button, which will refresh the page and the timer. The winScreen modal will allow the player to submit their score with their name consisting of 3 characters, arcade-style, to the database. The score will consist of the number of attempts that they took and the amount of seconds it took for them to solve the puzzle. 

