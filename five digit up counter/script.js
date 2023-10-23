// Get references to the display elements
var displayElements = document.getElementsByClassName('display');

// Variable to store the interval ID
var intervalId;

// Add click event listener to the counter button
document.getElementById('counterBtn').addEventListener('click', startCounter);

// Counter variables
var currentCount = 1;
var targetCount;

// Start the counter
function startCounter() {
	// Reset the current count to 1
	currentCount = 1;

	// Get the target count from the input field
	targetCount = parseInt(document.getElementById('numb').value, 10);

	clearInterval(intervalId); // Clear any previous intervals before starting a new one

	// Start the counter interval with a delay of 1000ms (1 second)
	intervalId = setInterval(updateCounter, 1000);
}

// Update the counter
function updateCounter() {
	// Check if the current count has reached the target count
	if (currentCount > targetCount) {
		clearInterval(intervalId); // Stop the counter interval
		setTimeout(resetCounter, 5000); // Reset the counter after a delay of 5000ms (5 seconds)
	} else {
		updateDisplay(); // Update the display with the current count
		currentCount++; // Increment the current count for the next iteration
	}
}

// Update the display with the current count
function updateDisplay() {
	var digitIndex = displayElements.length - 1; // Start from the least significant digit

	// Iterate over the display elements from right to left
	while (digitIndex >= 0) {
		var digitElement = displayElements[digitIndex];
		var currentValue = parseInt(digitElement.innerText, 10);

		// Check if the current digit value is 9
		if (currentValue === 9) {
			digitElement.innerText = '0'; // Reset the digit to 0
		} else {
			digitElement.innerText = String(currentValue + 1); // Increment the digit by 1
			break; // Exit the loop after updating the digit
		}

		digitIndex--; // Move to the next digit (less significant)
	}
}

// Reset the counter and form inputs
function resetCounter() {
	// Reset all display elements to 0
	for (var i = 0; i < displayElements.length; i++) {
		displayElements[i].innerText = '0';
	}

	// Reset the form input field
	document.getElementsByTagName('form')[0].reset();
}