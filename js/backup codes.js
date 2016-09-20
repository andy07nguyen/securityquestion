	var answerA = document.getElementById("answer0").value
	var answerB = document.getElementById("answer1").value
	var answerC = document.getElementById("answer2").value

	
	for(var i = 0; i < objSec.length; i++) {
		if(answerA, answerB, answerC == objSec[i].answer) {
			alert("Welcome! You're logged in!")
			return
		}		
	}

	alert("Invalid Answer")









	function submit() {
	var correct = 0;
	var incorrect = 0;

	for(var i =0; i < objSec.length; i++) {
		var answer = objSec[i].answer
		var guess = document.getElementById("answer" + [i])
		var question = document.getElementById("question" + [i])

		if(answer == guess) {
			question.className = "correct"
			correct++
		} else {
			question.className = "incorrect"
			incorrect++
		}
	}
	document.getElementById("correct").textContent = correct
	document.getElementById("incorrect").textContent = incorrect

}
