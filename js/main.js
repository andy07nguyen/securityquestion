//Questions & Answers
var secQuestions = [
	{
		question: "What's the background color ?",
		answer: "blue"
	},
	{
		question: "What city are we currently in ?",
		answer: "san francisco"
	},
	{
		question: "What color is the button ?",
		answer: "yellow"
	},
	{
		question: "What color is the font ?",
		answer: "black"
	},
	{
		question: "What does CA stand for ?",
		answer: "codify academy"
	},
	{
		question: "Codify Academy is located in ?",
		answer: "san francisco"
	}
]

//Display Questions
for(var i = 0; i < secQuestions.length; i++) {
	q = secQuestions[i].question
	document.getElementById('question' + i).textContent = q
}

function submitButton() {
	var correct = 0;
	var incorrect = 0;
	for(var i = 0; i < secQuestions.length; i++) {	
		var answer = secQuestions[i].answer
		var guess = document.getElementById('answer' + [i]).value
		var questionSpot = document.getElementById('question' + [i])
		if(answer == guess) {
			questionSpot.className = 'correct'
			correct++
		} else {
			questionSpot.className = 'incorrect'
			incorrect++
		}
	}
	document.getElementById('correct').textContent = correct
	document.getElementById('incorrect').textContent = incorrect
}




