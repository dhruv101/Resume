// Smooth Scoll
const navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
let interval;

for (let anchorTag of navMenuAnchorTags) {
	anchorTag.addEventListener('click', event => {
		event.preventDefault();
		const targetSectionID = this.document.activeElement.hash;
		const targetSection = document.querySelector(targetSectionID);

		interval = setInterval(() => scrollVertically(targetSection), 20);
	});
}

const scrollVertically = targetSection => {
	const destination = targetSection.getBoundingClientRect().top;
	if (destination <= 0) {
		clearInterval(interval);
		return;
	}
	window.scrollBy(0, 60);
};

// Skill Bar Auto Fill
const progressBars = document.querySelectorAll('.skill-progress > div');

const initialiseBar = bar => {
	bar.setAttribute('data-visited', false);
	bar.style.width = 0 + '%';
};

for (let bar of progressBars) {
	initialiseBar(bar);
}

const fillBar = bar => {
	const targetWidth = bar.getAttribute('data-bar-width');
	bar.style.width = targetWidth + '%';
};

const checkScroll = () => {
	for (let bar of progressBars) {
		const coordinates = bar.getBoundingClientRect();
		if (bar.getAttribute('data-visited') == 'false' && coordinates.bottom <= window.innerHeight) {
			bar.setAttribute('data-visited', true);
			fillBar(bar);
		} else if (bar.getAttribute('data-visited') == 'true' && coordinates.top > window.innerHeight) {
			bar.setAttribute('data-visited', false);
			initialiseBar(bar);
		}
	}
};

window.addEventListener('scroll', checkScroll);

//Percentage Scrolled
const percentLabel = document.querySelector('#percent');
// const progressBar = document.querySelector('#progressBar');

const percentageScrolled = () => {
	const scrollTop = window.scrollY;
	const docHeight = document.body.offsetHeight;
	const winHeight = window.innerHeight;
	const scrollPercent = scrollTop / (docHeight - winHeight);
	const scrollPercentRounded = Math.round(scrollPercent * 100);
	percentLabel.innerHTML = scrollPercentRounded;
	// progressBar.style.width = scrollPercentRounded + '%';
};

window.addEventListener('scroll', percentageScrolled);
