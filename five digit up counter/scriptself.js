var displayElements = document.getElementsByClassName('display');

var intervalId;

document.getElementById('counterBtn').addEventListener('click', startCounter);

var currentCount = 1;
var targetCount;

function startCounter() {

	currentCount = 1;
	targetCount = parseInt(document.getElementById('numb').value,10)
	clearInterval(intervalId); // Clear any previous intervals before starting a new one

	// Start the counter interval with a delay of 1000ms (1 second)
	intervalId = setInterval(updateCounter, 1000);
}

function updateCounter() {
	if (currentCount > targetCount) {
		clearInterval(intervalId);
		setTimeout(resetCounter, 5000);
	} else {
		updateDisplay()
		currentCount++;
	}
}

function updateDisplay() {
	var digitIndex = displayElements.length - 1; // Start from the least significant digit
	while (digitIndex >= 0) {
		let digitElement = displayElements[digitIndex];
		let currentValue = parseInt(digitElement.innerText,10)

		if (currentValue === 9) {
			digitElement.innerText = "0";
		} else {
			digitElement.innerText = String(currentValue + 1);
			break;
		}
		digitIndex--;
	}

}

function resetCounter() {

	for (var i = 0; i < displayElements.length; i++) {
		displayElements[i].innerText = '0';
	}
	document.getElementsByTagName('form')[0].reset();
}