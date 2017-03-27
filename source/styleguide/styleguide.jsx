import styles from 'Styleguide/styleguide.styles'; // eslint-disable-line

// browser Javascript
import React from 'react';
import Dom from 'react-dom';
import Nav from 'SgTags/Nav/Nav';

const nav = document.querySelector('.sg-nav');

if (nav) {
  Dom.render(<Nav />, nav);

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
