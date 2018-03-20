export default (el) => {
  const tabset = el.querySelector('.SgExample__tabs');
  const sections = el.querySelectorAll('.SgExample__section');
  const items = Array.prototype.slice.call(el.querySelectorAll('.SgExample__tabs-item'));

  tabset.addEventListener('click', (ev) => {
    const active = items.map((item) => item.contains(ev.target));

    const target = active.indexOf(true);

    if (!items[target].classList.contains('is-active')) {
      items[target].classList.add('is-active');
      sections[target].classList.add('is-active');
    } else {
      items[target].classList.remove('is-active');
      sections[target].classList.remove('is-active');
    }

    items.forEach((item, j) => {
      if (j !== target) {
        items[j].classList.remove('is-active');
        sections[j].classList.remove('is-active');
      }
    });
  });
};
