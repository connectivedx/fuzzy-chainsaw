import style from './styleguide/styleguide.css';

const body = document.body;

const nav = document.querySelector('.sg-nav');
const toggle = nav.querySelector('.sg-nav__toggle');
const cover = nav.querySelector('.sg-nav__cover');

body.addEventListener('click', ev => {
	if (toggle.contains(ev.target)) {
		body.classList.toggle('is-sg-nav-expanded');
		nav.classList.toggle('is-expanded');
	}

	if (cover.contains(ev.target)) {
		body.classList.remove('is-sg-nav-expanded');
		nav.classList.remove('is-expanded');
	}
});

body.addEventListener('keyup', ev => {
	if (ev.keyCode === 27) {
		body.classList.remove('is-sg-nav-expanded');
		nav.classList.remove('is-expanded');
	}
});

const examples = Array.prototype.slice.call(document.querySelectorAll('.sg-example'));
const examplesTabs = examples.map(e => e.querySelector('.sg-example__tabs'));
const examplesSections = examples.map(e => e.querySelectorAll('.sg-example__section'))
const examplesItems = examples.map(e => e.querySelectorAll('.sg-example__tabs-item'));

examplesTabs.forEach((tabset, i) => {
	tabset.addEventListener('click', ev => {
		examplesItems[i].forEach((item, j) => {
			examplesItems[i][j].classList.toggle('is-active', item.contains(ev.target));
			examplesSections[i][j].classList.toggle('is-active', item.contains(ev.target));
		});
	});
});