const box = document.getElementById('target-div');
var maxHeight = window.innerHeight;
var maxWidth = window.innerWidth;


function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function movediv(){
	var curr = box.getBoundingClientRect();

	let top = getRndInteger(curr.height , maxHeight);
	let left = getRndInteger(curr.width , maxWidth);

	if (top > window.innerHeight) {
		top=0;
	}
	if (left > window.innerWidth) {
		left=0;
	}

	box.style.left = left + 'px';
	box.style.top = top + 'px';
}

box.addEventListener('mouseover', movediv);