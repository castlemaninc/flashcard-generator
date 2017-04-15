# HW - Flashcard Generator
The backend for a basic flashcard application

## How to use the Application
From the command line the user will be prompted to create a set of either Basic flashcards or a set of Cloze Delete flaschards. 

Upon choosing either Basic, or Cloze, the user will be directed to fill in the information for the front and the back of each flashcard, in the particular style they choose. 

## Basic Flashcards
- User will fill in a question of their choice for the front, and an answer for the back

## Cloze Delete Flashcards

- User must fill in a factual statement for the front. 
- For the back of the flashcard, the user must fill in a portion of text to be hidden from the previous factual statement on the front. 

## Technologies Used 
- Node.js
- Node Package Inquirer
- Javascript 

## Code Explanation
The code is modularized into 3 files:
1. CLI.js
- The CLI prompts the user, using NPM Inquirer to make a choice between creating a set of flashcards in Basic style or Cloze style. A conditional statement, creates a new object from the appropriate constructor function, and calls the method to get further user input

2. basic.js
- The basic.js file contains a constructor function that takes in a front and back argument. 
- The BasicCard constructor function has a method called getUserInput which prompts the user to fill in flashcard data for the front and back of the cards. 

3. cloze.js 
- The cloze.js file contains a constructor function that takes in text and clozeDelete arguments. 
- The ClozeCard constructor function also a method called getUserInput which prompts the user to fill in flashcard data for the front and back of the cards.

The constructor functions are exported through the use of the Node.js module.exports 