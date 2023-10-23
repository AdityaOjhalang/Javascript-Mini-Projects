const ball = document.getElementById('ball');
ball.style.top = ball.offsetTop+"px";
ball.style.left = ball.offsetLeft+"px";

function Movetheball(e) {

	var top=parseInt(ball.style.top);
   	var left=parseInt(ball.style.left);

	console.log(top);
	let keyPressed = e.keyCode;
	if(keyPressed === 87 || keyPressed === 38){ 
		if(top >= 28)
		ball.style.top = ball.offsetTop + -24 + "px";
	}
	if(keyPressed === 65 || keyPressed === 37){ 
		if(left >= 5)
		ball.style.left = ball.offsetLeft + -24 + "px";
	}
	if(keyPressed === 68 || keyPressed === 39){ 
		if(left<=1780)
		ball.style.left = ball.offsetLeft + 24 + "px";
	}
	if(keyPressed === 83 || keyPressed ===40){ 
		if(top<844)
		ball.style.top = ball.offsetTop + 24 + "px";
	}
}

document.addEventListener('keydown', Movetheball);



// ﻿
// logic.js:5 keyPressed 87 w
// logic.js:5 keyPressed 65 a
// logic.js:5 keyPressed 83 s
// logic.js:5 keyPressed 68 d