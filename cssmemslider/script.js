// Variables

const images = document.querySelectorAll('.slide-image');
const texts = document.querySelectorAll('.slide-text');

const pagination = document.querySelectorAll('.circle-overlay');

let currentItem = 0;
let isEnabled = true;

// Functions

function changeCurrentItem(n) {
	currentItem = (n + images.length) % images.length;
}

function hideItem(direction) {
	isEnabled = false;
	images[currentItem].classList.add(direction);
	images[currentItem].addEventListener('animationend', function() {
		this.classList.remove('active', direction);
	});
}

function showItem(direction) {
	images[currentItem].classList.add('active', direction);
	images[currentItem].addEventListener('animationend', function() {
		this.classList.remove('active', direction);
		this.classList.add('active');
		isEnabled = true;
	});
}


// Event Listeners

for (let i=0;i<pagination.length;i++) {
	pagination[i].addEventListener('click', () => {
		if (isEnabled) {
			if (i > currentItem) {
				hideItem('to-left');
				changeCurrentItem(i);
				showItem('from-right');
			} else {
				hideItem('to-right');
				changeCurrentItem(i);
				showItem('from-left');
			}
		}
	})
}