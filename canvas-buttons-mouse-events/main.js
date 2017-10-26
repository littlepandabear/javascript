document.addEventListener("DOMContentLoaded", init);

var canvas;
var context;

var redButton;

var buttonsArray = [];

var isDown = false;

var color = "black";

function init() {
	
	var container = document.getElementById("container");
	container.width = window.innerWidth;
	container.height = window.innerHeight;
	
	canvas = document.getElementById("mainCanvas");
	canvas.width = container.width;
	canvas.height = container.height;
	
	canvas.addEventListener("mousedown", mouseDownFunc);
	canvas.addEventListener("mousemove", mouseMoveFunc);
	canvas.addEventListener("mouseup", mouseUpFunc);
    
    context = canvas.getContext("2d");
	
	
	// make buttons
	var redButton = new Button(20, 20, 150,100, redClicked);
	context.fillStyle = "red";
	context.fillRect(redButton.x,redButton.y,redButton.width,redButton.height);
	
	var greenBtn = new Button(20, 200, 150,100, greenClicked);
	context.fillStyle = "green";
	context.fillRect(greenBtn.x,greenBtn.y,greenBtn.width,greenBtn.height);
	
	buttonsArray = [redButton, greenBtn];
	
}


function mouseDownFunc(event){
	console.log("mouse down - event:", event);
	
	isDown = true;
    	
	var realX = event.x - canvas.offsetLeft;
	var realY = event.y - canvas.offsetTop;
		
	testButtons(realX,realY);		
	
	
}



function mouseMoveFunc(event){
	console.log("mouse move - event:", event);
	
	if (isDown == true){
		var radius = 20;
		
		context.beginPath();
		context.arc(event.x, event.y, radius, 0, 2 * Math.PI, false);
		context.fillStyle = color;
		context.fill();
	}
	
}

function mouseUpFunc(event){
	isDown = false;
	
	console.log("mouse up - event:", event);
}


function testButtons(testX,testY){
		
	for (var i = 0; i < buttonsArray.length; i++){
		
		var testButton = buttonsArray[i];
		
		if (testX > testButton.x && testX < (testButton.x + testButton.width) ){
			if (testY > testButton.y && testY < (testButton.y + testButton.height) ){
			
				console.log("you clicked the button",i, testButton);
				testButton.action();
		
			}
		}
		
	}
	
}

function redClicked(){
	console.log("red clicked");
	color = "red";
	
}

function greenClicked(){
	console.log("green clicked");
	color = "green";
	
}


