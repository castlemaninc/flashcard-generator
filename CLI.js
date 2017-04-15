var inquirer = require("inquirer");
var BasicCard = require("./basic.js");
var ClozeCard = require("./cloze.js");
var Quiz = require("./quiz.js")

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

var basicCards = [];
var clozeCards = [];
var loop = 1;

var myBasicCards = new BasicCard();
var myClozeCards = new ClozeCard();

function chooser(choice){
	if (choice === "basic"){
		// console.log("Follow me down the basic path.");
		// getBasicCardData();
		myBasicCards.getData();
		
	} else if(choice === "cloze"){
		// console.log("Follow me down the cloze path");
		myClozeCards.getData();
	}
}


// Basic 

// Prompt the user to give both a front and a back to a flashcard. 
// Repeat 10x
// Store that information
// Use that information in a quiz
// Count correct and incorrect answers 

// function getBasicCardData(){
// 	if (loop <=10){
// 		inquirer.prompt([{
// 			name: "question",
// 			message: "Enter a question for the front of card number " + loop + "." 
// 		},{ 
// 			name: "correctAnswer",
// 			message: "Enter the answer to the question"

// 		}]).then(function(answers){
// 			front = answers.question;
// 			back = answers.correctAnswer; 
// 			// console.log("The front says: " + front);
// 			// console.log("The back says: " + back);

// 			// Create a new instance of a basic card and push it to 
// 			var NewBasicCard = new BasicCard(front,back);
// 			basicCards.push(NewBasicCard);
// 			console.log("This is the basicCards array " + basicCards);
// 			// console.log("The front of card number " + loop + " says: " + basicCards[loop-1].front);
// 			// console.log("The back of card number " + loop + " says: " + basicCards[loop-1].back);
// 			loop++;
// 			getBasicCardData();			
// 		}) 

// 	}
// }
// Cloze 
// Take in an entire sentence 
// Ask the person to delete a section called the cloze-delete 
// Store this information
// Use that information in a quiz 
// Count correct and incorrect answers 

 // function getClozeCardData(){
 // 	if (loop <=10){
 // 		inquirer.prompt([{
 // 			name: "fact",
 // 			message: "Insert a fact for the front of card number " + loop + "." 
 // 		},{ 
	// 		name: "cloze",
	// 		message: "Hide some information"

	// 	}]).then(function(answers){
	// 		text = answers.fact;
	// 		clozeDelete = answers.cloze; 
	// 		// console.log("The front says: " + front);
	// 		// console.log("The back says: " + back);

	// 		// call the cloze card constructor function to create a new cloze card
	// 		var NewClozeCard = new ClozeCard(text, clozeDelete);
	// 		clozeCards.push(NewClozeCard);
	// 		console.log("This is the clozeCards array " + clozeCards);
	// 		NewClozeCard.cloze();
	// 		NewClozeCard.partial();
	// 		NewClozeCard.fullText();
	// 		loop++;
	// 		getClozeCardData();
	// 	})
	// }
// }

