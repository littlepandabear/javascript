document.addEventListener("DOMContentLoaded",init);

var questions;
var answers = [];

var curr = 0;

function init(){	
	
	//fetch api
	fetch('https://opentdb.com/api.php?amount=5&category=25&type=multiple',{
		method: 'get'
	}).then(function(response) {
		//set response to json
		return response.json();
	}).then(function(data) {
		console.log("response data:",data.results, data.results.length)

		//store json response
		questions = data.results;

		//create quiz with data
		createQuiz()

	});

	document.getElementById("submit").addEventListener("click", submitQuestion);
}


function scoreQuiz(){
	
	console.log(answers);
	var score = 0;
	
	 for (var i=0; i < questions.length; i++){
		 
		 if (questions[i].correct_answer == answers[i]){
			 score += 1;
		 }
	 	
	 }
	 
	 var percent = (score*100)/questions.length;
	 
	 console.log("score",score);
	 
	 console.log("%",percent);
	 
	 
	//remove button and put results in form
	document.getElementById("submit").remove()
	 
	var form = document.getElementById("quiz");
	form.innerHTML = score+"/"+questions.length+"<br>";
	form.innerHTML += percent+"%";
	
}

function submitQuestion(){
	
	//store last answer
	var answer = document.getElementById("quiz").querySelector(".form-check-input").value;
	console.log(answer)
	answers.push(answer);
	
	//change text of button to submit before last question
	if (curr <= questions.length-1){
		document.getElementById("submit").innerHTML = "submit";
	} 
	
	
	//go to next question
	curr += 1;
	
	//if question was last, end quiz
	if (curr >= questions.length){
		//endQuiz
		
		scoreQuiz()
		
	} else {
		//if question was not last, change content
		
	    var form_qestion = document.getElementById('question');
		form_qestion.innerHTML = questions[curr].question;
	
		var form_choices = document.getElementById('choices');
	
		var choices = questions[curr].incorrect_answers;
		choices.push(questions[curr].correct_answer);
	
		choices = shuffleArray(choices);
	
		console.log(choices); 

		//update
	    for (var i=0; i < choices.length; i++){
		
			// div > <label class="form-check-label">
			var labels = document.getElementsByClassName("form-check-label");
			labels[i].innerHTML = choices[i];
	
			//div  > label > <input class="form-check-input" type="radio" value="">
			var input = document.createElement("input");
			input.className = "form-check-input";
			input.type = "radio";
			input.name = "question";
			input.value = choices[i];
			labels[i].prepend(input);
		
	    }
		
		
		
	}
	
    
}

function createQuiz(){
	
    var form_qestion = document.getElementById('question');
	form_qestion.innerHTML = questions[curr].question;
	
	var form_choices = document.getElementById('choices');
	
	var choices = questions[curr].incorrect_answers;
	choices.push(questions[curr].correct_answer);
	
	choices = shuffleArray(choices);
	
	console.log(choices); 

    for (var i=0; i < choices.length; i++){

		//<div class="form-check">
		var check = document.createElement("div");
		check.className = "form-check";
		form_choices.appendChild(check);
		
		// div > <label class="form-check-label">
		var label = document.createElement("label");
		label.className = "form-check-label";
		label.innerHTML = choices[i];
		check.appendChild(label);
		
		//div  > label > <input class="form-check-input" type="radio" value="">
		var input = document.createElement("input");
		input.className = "form-check-input";
		input.type = "radio";
		input.name = "question";
		input.value = choices[i];
		label.prepend(input);
		
    }
		
}


function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
	return array;
}