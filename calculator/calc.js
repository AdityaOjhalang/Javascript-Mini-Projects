var buttons = document.getElementsByClassName('button');
var display = document.getElementById('display');
var operand1 = 0;
var operand2 = null;
var operator = null
var result = null;

for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', function () {
		// display.innerHTML = this.innerHTML;
		var value = this.getAttribute("data-value");
		if (value == "reset") {
			display.innerHTML = "";
			result = null;
		} else if (value == "+" || value == "-" || value == "*" || value == "/" || value == "%") {
			if (result != null) {
				operand1 = result;
			} else {
				operand1 = parseFloat(display.innerHTML);
			}
			operator = value;
			display.innerHTML = " ";

		} else if (value == "negative") {
			display.innerText = eval(parseFloat(display.innerText) * -1);
		} else if (value == "=") {
			operand2 = parseFloat(display.innerHTML);
			if (operator == "/" && operand2 == 0) {
				display.innerHTML = "Cannot divide by zero";
			} else {
				result = eval(operand1 + " " + operator + " " + operand2);
				display.innerHTML = " ";
				display.innerHTML = result;
			}

		} else {
			display.innerHTML += value;
		}
	});
}

(function () {
	console.log("using IIFElement")
})();
var b = "helllo";
var m = b.sort();
console.log(m);