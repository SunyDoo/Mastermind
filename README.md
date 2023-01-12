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
-Note: Colors can repeat in the pattern


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