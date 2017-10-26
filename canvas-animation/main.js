document.addEventListener("DOMContentLoaded", init);

var canvas;
var context;

var xpos = 0;
var ypos = 0;

var radius = 75;

var degrees = 0;

function init() {
    
    //window.requestAnimationFrame is part of a native API for running any type of animation in the browser, be it using DOM elements, CSS, canvas, WebGL or anything else
    window.requestAnimationFrame = window.requestAnimationFrame || 
							window.webkitRequestAnimationFrame || 
							window.mozRequestAnimationFrame || 
							window.msRequestAnimationFrame;
	
	var container = document.getElementById("container");
	container.width = window.innerWidth;
	container.height = window.innerHeight;
	
	canvas = document.getElementById("mainCanvas");
	canvas.width = container.width;
	canvas.height = container.height;
    
    context = canvas.getContext("2d");
    
    //draw rect as background
    context.beginPath();
    context.fillStyle = 'yellow';
    context.fillRect(0,0,canvas.width,canvas.height);//x,y,w,h
    context.closePath();
    
    //calls loop function once to start animation
    window.requestAnimationFrame(loop);
   
}


function loop(timestamp){
    
    console.log(timestamp);

    //clear last rect
    //context.clearRect(xpos-1, ypos-1, 100, 100);  
    context.clearRect(0, 0, canvas.width, canvas.height);    
    
    //draw rect
    context.beginPath();
    context.rect(xpos, ypos, 100, 100);
    context.fillStyle = "red";
    context.fill();
    context.closePath();
	
    //draw circle
    context.beginPath();
    context.arc(canvas.width/2, canvas.height/2, radius, 0, 2*Math.PI, false);
    context.fillStyle = "blue";
    context.fill();
    context.closePath();
    
    //update rect position
    xpos++;
    ypos++;
    
    //increase circle radius every time xpos increases by 30
    if(xpos%30 == 0){
        radius++;
    }
    
   
    //rotate
    var x = 250;
    var y = 200;
    var w = 100;
    var h = 100;
	
    rotate(x,y,w,h);
    
    //calls itself to continuosly animate
    window.requestAnimationFrame(loop);
    
} 

function rotate(x,y,w,h){
	
    //save current canvas
    context.save(); 
    
    //draw rect
    context.beginPath();

    
    //move the rotation point to the center of the rect
    context.translate(x+w/2, y+h/2);
    // rotate the rect
    context.rotate(degrees*Math.PI/180);

    //offset rect
    context.rect(-x/2, -y/2, 100, 100);
    context.fillStyle = "green";
    context.fill();
    context.closePath();
    
    context.restore(); 
	
    degrees ++; //increment degrees
	
}