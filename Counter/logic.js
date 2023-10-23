var current = document.querySelector('.current');
var next = document.querySelector('.next');
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var count;
var interval;
var x;

function startcounter() {
	x = parseFloat(document.getElementById("input").value);
	interval = setInterval(animate, 1000);
	console.log('startcounter');
	console.log("input value is : ", x)
	count = 1;


}

function animate() {
	console.log("count is " + count)
	console.log("input in func " + x)
	if (count == x+1) {
		clearInterval(interval)
		alert("counter stopped")
		return;

	}
	next.classList.add('animate');
	next.innerHTML = arr[count]
	setTimeout(function () {
		next.classList.remove('animate');
		current.innerHTML = next.innerHTML;

	}, 500)
	count++;


}
