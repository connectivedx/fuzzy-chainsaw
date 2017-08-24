export default (el) => {
  const tabset = el.querySelector('.SgExample__tabs');
  const sections = el.querySelectorAll('.SgExample__section');
  const items = Array.prototype.slice.call(el.querySelectorAll('.SgExample__tabs-item'));

  tabset.addEventListener('click', (ev) => {
    const active = items.map((item) => item.contains(ev.target));
    if (active.indexOf(true) !== -1) {
      items.forEach((item, j) => {
        items[j].classList[active[j] ? 'add' : 'remove']('is-active');
        sections[j].classList[active[j] ? 'add' : 'remove']('is-active');
      });
    }
  });
};
