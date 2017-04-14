// Create a  ClozeCard  constructor. It should accept  text  and  cloze  arguments.


// ********************* Example *******************************

// var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");

// ClozeCard  should have a property or method that contains or returns only the cloze-deleted portion of the text.
// "George Washington"
// console.log(firstPresidentCloze.cloze); 

// // ClozeCard  should have a property or method that contains or returns only the partial text.
// // " ... was the first president of the United States.
// console.log(firstPresidentCloze.partial); 

// // ClozeCard  should have a property or method that contains or returns only the full text.
// // "George Washington was the first president of the United States.
// console.log(firstPresidentCloze.fullText); 

// // ClozeCard  should throw or log an error when the cloze deletion does not appear in the input text.
// // Should throw or log an error because "oops" doesn't appear in "This doesn't work"
// var brokenCloze("This doesn't work", "oops");

// Use prototypes to attach these methods, wherever possible.

// ********************* End of Example *******************************


function ClozeCard(text, clozeDelete){

	// a method that contains or returns only the cloze-deleted portion of the text
	this.cloze = function(){
		var cloze= clozeDelete;
		console.log(cloze);
	}; 

	// a method that contains or returns only the partial text
	this.partial = function(){
		var partial = text.replace(clozeDelete, "...");
		console.log(partial);
	};

	// method that contains or returns only the full text.
	this.fullText = function(){
		var fullText = text;
		console.log(fullText);
	}

}


var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");

firstPresidentCloze.cloze();
firstPresidentCloze.partial();
firstPresidentCloze.fullText();


module.exports = ClozeCard; 