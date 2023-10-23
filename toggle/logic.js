var toggle = document.getElementById('switch');
var body = document.body;

toggle.addEventListener('click', function() {
 body.classList.toggle('dark-mode');
});