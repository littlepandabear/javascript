document.addEventListener("DOMContentLoaded", init);

var canvas;
var context;

function init() {
	
	var container = document.getElementById("container");
	container.width = window.innerWidth;
	container.height = window.innerHeight;
	
	canvas = document.getElementById("canvas");
	canvas.width = container.width;
	canvas.height = container.height;
    
    context = canvas.getContext("2d");
    
    //draw rect as background
    context.fillStyle = 'yellow';
    context.fillRect(0,0,canvas.width,canvas.height); //x,y,w,h
    
    //draw rect 
    context.fillStyle = 'green';
    context.fillRect(50,30,100,100);//x,y,w,h
    
    //draw text
    context.font = '24pt Calibri';
    context.fillStyle = 'blue';
    context.fillText('Hello World!', 25, 185); //string, x, y
    
    //create Img
    var src = 'https://cdn2.iconfinder.com/data/icons/thesquid-ink-40-free-flat-icon-pack/64/space-rocket-256.png';
    var image = loadImg(30, 300, src);
    var image2 = loadImg(600, 20, src);
    
    //create an arc
    drawArc();

    //create button
    var clearbutton = document.createElement('button');
	clearbutton.className = "button";
    clearbutton.innerHTML = "clear";
    clearbutton.addEventListener("click", eraseCanvas);
    container.appendChild(clearbutton);
   
}

function eraseCanvas(){
     //erase the canvas
    context.clearRect(0,0,canvas.width,canvas.height); //x, y, w, h
}

function loadImg(x,y,src){
    //create Img obj
    var imageObj = new Image();
    
    //when the image loads, render on canvas
    imageObj.onload = function() {
        //draw image
        context.drawImage(imageObj, x, y); //imgobj, x, y

    };
    //set source
    imageObj.src = src;
}


function drawArc(){
	
    context.beginPath(); //begin path
    
    //parameters for arc
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var radius = 75;
    var startAngle = 1.1 * Math.PI;
    var endAngle = 1.9 * Math.PI;
    var counterClockwise = false;
    
    context.arc(x,y,radius,startAngle,endAngle,counterClockwise);
    
    context.fillStyle = 'blue';
    context.fill();
    
    context.closePath();//end path
    
    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.stroke();
	
}
