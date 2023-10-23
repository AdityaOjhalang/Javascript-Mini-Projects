
var countInterval;

function startCounter() {
  var number = parseInt(document.getElementById("number").value);
  var currentNo = document.querySelector(".counter .current");
  var nextNo = document.querySelector(".counter .next");
  var count = 0;
  // If user clicks on 'Start Counter' button again - remove this function and below 2 lines if you don't consider this situation
  resetNumbers(currentNo, nextNo);

  if (number < 1 || number > 9) {
    clearInterval(countInterval);
    return;
  }

  // Clears the previous interval that was running
  clearInterval(countInterval);

  countInterval = setInterval(function() {
    if (count === number) {
      clearInterval(countInterval);
      return;
    }
    increaseCount(currentNo, nextNo);
    count++;
  }, 1000);
}

function resetNumbers(currentNo, nextNo, end) {
  currentNo.innerHTML = 0;
  nextNo.innerHTML = 1;
}

function increaseCount(currentNo, nextNo) {
  nextNo.classList.add("animate");

  currentNo.innerHTML = nextNo.innerHTML;
  nextNo.classList.remove("animate");
  nextNo.innerHTML = parseInt(nextNo.innerHTML) + 1;
}

