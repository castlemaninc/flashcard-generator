var inquirer = require("inquirer");
var BasicCard = require("./basic.js");
var ClozeCard = require("./cloze.js");

var answer = "";
// User is asked if they want to create a Basic Flashcard or a Cloze Delete Flashcard? 
inquirer.prompt([{
	name: "cardType",
	type: "rawlist",
	message: "What type of flashcards would you like to create? Answer 1 or 2",
	choices: ["basic", "cloze"]
	}]).then(function(answers){
		answer = answers.cardType;
		console.log("----------------------");
		console.log("Build 10 " + answer + " flashcards.");
		chooser(answer);		
});

var basicCards = []
var loop = 1;

// var NewBasicCard = new BasicCard();
// var NewClozeCard = new ClozeCard();

function chooser(choice){
	if (choice === "basic"){
		// console.log("Follow me down the basic path.");
		getBasicCardData();
		
	} else if(choice === "cloze"){
		console.log("Follow me down the cloze path");
	}
}


// Basic 

// Prompt the user to give both a front and a back to a flashcard. 
// Repeat 10x
// Store that information
// Use that information in a quiz
// Count correct and incorrect answers 

function getBasicCardData(){
	if (loop <=10){
		inquirer.prompt([{
			name: "question",
			message: "Enter a question for the front of card number " + loop + "." 
		},{ 
			name: "correctAnswer",
			message: "Enter the answer to the question"

		}]).then(function(answers){
			front = answers.question;
			back = answers.correctAnswer; 
			// console.log("The front says: " + front);
			// console.log("The back says: " + back);

			// Create a new instance of a basic card and push it to 
			var NewBasicCard = new BasicCard(front,back);
			basicCards.push(NewBasicCard);
			console.log("This is the cards array " + basicCards);
			// console.log("The front of card number " + loop + " says: " + basicCards[loop-1].front);
			// console.log("The back of card number " + loop + " says: " + basicCards[loop-1].back);
			loop++;
			getBasicCardData();
		})
	}
}
// Cloze 
// Take in an entire sentence 
// Ask the person to delete a section called the cloze-delete 
// Store this information
// Use that information in a quiz 
// Count correct and incorrect answers 

// function getClozeCardData(){
// 	if (loop <=10){
// 		inquirer.prompt([{
// 			name: "question",
// 			message: "Insert a fact for the front of card number " + loop + "." 
// 		},{ 
// 			name: "correctAnswer",
// 			message: "Enter the answer to the question"

// 		}]).then(function(answers){
// 			front = answers.question;
// 			back = answers.correctAnswer; 
// 			// console.log("The front says: " + front);
// 			// console.log("The back says: " + back);

// 			// call the basic card constructor function to create a new basic card
// 			var NewBasicCard = new BasicCard(front,back);
// 			cards.push(NewBasicCard);
// 			console.log("This is the cards array " + cards);
// 			console.log("The front of the card says: " + cards[0].front);
// 			console.log("The back of the card says: " + cards[0].back);
// 			loop++;
// 			getBasicCardData();
// 		})
// 	}
// }
