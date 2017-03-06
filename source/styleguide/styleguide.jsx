// CSS
require.context('SgVars/', true, /\.css$/);
require.context('SgTags/', true, /\.css$/);
require.context('SgComponents/', true, /\.css$/);

// browser Javascript
const body = document.body;
const nav = document.querySelector('.sg-nav');

if (nav) {
  const toggle = nav.querySelector('.sg-nav__toggle');
  const cover = nav.querySelector('.sg-nav__cover');

  body.addEventListener('click', (ev) => {
    if (toggle.contains(ev.target)) {
      body.classList.toggle('is-sg-nav-expanded');
      nav.classList.toggle('is-expanded');
    }

    if (cover.contains(ev.target)) {
      body.classList.remove('is-sg-nav-expanded');
      nav.classList.remove('is-expanded');
    }
  });

  body.addEventListener('keyup', (ev) => {
    if (ev.keyCode === 27) {
      body.classList.remove('is-sg-nav-expanded');
      nav.classList.remove('is-expanded');
    }
  });


  const examples = Array.prototype.slice.call(document.querySelectorAll('.sg-example'));
  const examplesTabs = examples.map(e => e.querySelector('.sg-example__tabs'));
  const examplesSections = examples.map(e => e.querySelectorAll('.sg-example__section'));
  const examplesItems = examples.map(e => Array.prototype.slice.call(e.querySelectorAll('.sg-example__tabs-item')));

  examplesTabs.forEach((tabset, i) => {
    tabset.addEventListener('click', (ev) => {
      const active = examplesItems[i].map(item => item.contains(ev.target));
      if (active.indexOf(true) !== -1) {
        examplesItems[i].forEach((item, j) => {
          examplesItems[i][j].classList.toggle('is-active', active[j]);
          examplesSections[i][j].classList.toggle('is-active', active[j]);
        });
      }
    });
  });
}
