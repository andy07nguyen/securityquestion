var objSec = [
	{
		question: "What's your favorite color?",
		answer: "blue"
	},
	{
		question: "What city were you born in?",
		answer: "san francisco"
	},
	{
		question: "What was your first car model?",
		answer: "prius"
	}
]

for(var i = 0; i < objSec.length; i++) {
	var q = objSec[i].question
	document.getElementById("question" + [i]).textContent = q
}


function login() {
	var answerA = document.getElementById("answer1").value
	var answerB = document.getElementById("answer2").value
	var answerC = document.getElementById("answer3").value

	
	for(var i = 0; i < objSec.length; i++) {
		if(answerA, answerB, answerC == objSec[i].answer) {
			alert("Welcome! You're logged in!")
			return
		}		
	}

	alert("Invalid Answer")


}


// function register() {
// 	var registerUser = document.getElementById("newUser").value
// 	var registerPassword = document.getElementById("newPass").value
// 	var newUser = {
// 		username: registerUser,
// 		password: registerPassword
// 	}

// 	for(var i = 0; i < objUsers.length; i++) {
// 		if(registerUser == objUsers[i].username) {
// 			alert("that username is already in use, please choose another")
// 			return
// 		} else if (registerPassword.length < 8) {
// 			alert("that password is too short, include 8 or more characters")
// 			return
// 		}
// 	}

// 	objUsers.push(newUser)
// 	console.log(objUsers)
// }






