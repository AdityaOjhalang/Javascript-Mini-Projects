var color = document.getElementById('colorbtn');
var shape = document.getElementById('shapebtn');
var outerb = document.getElementById('outerbox');
var innerb = document.getElementById('innerbox');
var cont = document.getElementById('cont');
const randColor = () => {
	return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase();
}

function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

color.addEventListener('click', function () {
	var b = randColor();
	outerb.style.backgroundColor = b;
})


shape.addEventListener('click', function () {
	var c = getRndInteger(1, 3);
	console.log(c);
	if (c == 1) {
		innerb.style.borderRadius = "50%"
		innerb.style.height = "120px"
		innerb.style.width = "120px"
	} else if (c == 2) {
		innerb.style.height = "120px"
		innerb.style.borderRadius = "0%"
		innerb.style.width = "120px"
	} else {
		innerb.style.height = "80px"
		innerb.style.borderRadius = "0%"
		innerb.style.width = "120px"
	}


})
