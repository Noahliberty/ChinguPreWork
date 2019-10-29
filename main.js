// Selection of HTML objects
const burger = document.querySelector('.burger i');
const nav = document.querySelector('.nav');
const cardText = document.querySelectorAll('.cardText');
const input = document.getElementById('textInput');
const fontSizeSelector = document.getElementById('fontSelector');
const reset = document.getElementById('reset');


// Listeners
input.addEventListener('keyup', textReplace);
fontSizeSelector.addEventListener('change', fontSizeChange);
burger.addEventListener('click', function() {
toggleNav();
});
reset.addEventListener('click', function() {
	window.location.reload(false);
});

// Defining nav bar function
function toggleNav() {
burger.classList.toggle('fa-bars');
burger.classList.toggle('fa-times');
nav.classList.toggle('nav-active');
}



// Text replace function
function textReplace() {
	const cardText = document.querySelectorAll('.card-text');
	let inputVal = document.getElementById('textInput').value;
	// loop to replace all text or reset to default
	if(!inputVal) {
		for(var i = 0; i < cardText.length; i++) {
		cardText[i].innerHTML = 'Then came the night if the first falling star.'
		} 
	} else {
		for(var i = 0; i < cardText.length; i++) {
		cardText[i].innerHTML = inputVal
			}
		}
	
};

function fontSizeChange () {
	const cardText = document.querySelectorAll('.card-text');
	let fontSize = document.getElementById('fontSelector');
	let fontValue = fontSize.options[fontSize.selectedIndex].value;
	console.log(fontValue);
	for(var i = 0; i < cardText.length; i++) {
		cardText[i].style.fontSize = fontValue + 'px';
			}
		}
	
	

	



