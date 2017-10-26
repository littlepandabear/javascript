document.addEventListener("DOMContentLoaded",init);


function init() { 
    window.addEventListener("keypress", keyPressFunc);
	window.addEventListener("keydown", keyDownFunc);
}

/*
The keyCode and which property does not work on the onkeypress event for non-printable, 
function keys (like CAPS LOCK, CTRL, ESC, F12, etc.).
*/

function keyPressFunc (event) {
	
	var unicode = event.keyCode || event.which; //keycode or character code
	console.log("keypress",unicode);
	document.getElementById("keypress").innerHTML = unicode+", "+String.fromCharCode(unicode);
	
	//alt compare: String.fromCharCode(unicode) == '#'
	if (unicode == 35){ 
		console.log("shift + 3");
	}

}

function keyDownFunc (event) {
	
	var unicode = event.keyCode || event.which; //keycode or character code
	console.log("keydown",unicode);
	document.getElementById("keydown").innerHTML = unicode+", "+String.fromCharCode(unicode);	
	
	if (unicode == 70){
		console.log("f");
	} else if (unicode == 27){
		console.log("esc");
	}

}