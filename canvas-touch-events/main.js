document.addEventListener("DOMContentLoaded", init);

var canvas;
var context;

var touchCount = 0;

function init() {
	
	var container = document.getElementById("container");
	container.width = window.innerWidth;
	container.height = window.innerHeight;
	
	canvas = document.getElementById("mainCanvas");
	canvas.width = container.width;
	canvas.height = container.height;

	canvas.addEventListener("touchstart", touchStartFunc);
	canvas.addEventListener("touchmove", touchMoveFunc);
	canvas.addEventListener("touchend", touchEndFunc);
    
    context = canvas.getContext("2d");
		   
}

function touchStartFunc(event){
	//console.log("start:", event);
	
	//log touchCount to div
	touchCount = "touches:" + event.targetTouches.length;	
	document.getElementById("log").innerHTML = touchCount;
	
	//draw touch points
	drawPoints(event);

}

function touchMoveFunc(event){
	//console.log("move:", event);		

	//clear canvas before drawing touch points
    context.clearRect(0, 0, canvas.width, canvas.height);	
		
	//draw touch points
	drawPoints(event);

}

function touchEndFunc(event){
	//console.log("end:", event);
	
	//reset touchCount to 0
	touchCount = "touches:" + 0;
	document.getElementById("log").innerHTML = touchCount;
	
	//clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);	
}


function drawPoints(event){
	
	//draw circle for each touch point
	for (var i = 0; i < event.touches.length; i++){
		
		var touch = event.touches[i];
		
		var x = touch.clientX;
		var y = touch.clientY;
		
		var radius = 40;
		context.beginPath();
		context.arc(x, y, radius, 0, 2 * Math.PI, false);
		context.fillStyle = "blue";
		context.fill();
	}
}
