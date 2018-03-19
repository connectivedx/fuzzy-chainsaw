export default (el) => {
  /* query select needed pieces */
  const ui = {
    scrollContainer: document.querySelector('.SgScrollbars__container--content'), // content scrollbar container
    listContainer: el.querySelector('.SgStyleguide__section-header'), // wrapper around list
    listContent: el.querySelector('.SgStyleguide__section-examplesList'), // list of links
    arrowLeft: el.querySelector('.SgStyleguide__arrow--left'), // arrow left contained by wrapper
    arrowRight: el.querySelector('.SgStyleguide__arrow--right'), // arrow right contained by wrapper
    examples: el.querySelectorAll('.SgExample'),
    links: el.querySelectorAll('.SgStyleguide__example-link'),
    active: el.querySelector('.SgStyleguide__example-link.is-active')
  };

  const isSupported = (prop, value) => {
    const d = document.createElement('div');
    d.style[prop] = value;
    return d.style[prop] === value;
  };

  if (!isSupported('position', 'sticky')) {
    ui.listContainer.style.top = 0;
  }

  const setActive = (elm) => {
    elm.className += ' is-active'; // IE friendly
  };

  const clearActive = (elm) => {
    ui.active.className = ui.active.className.replace(' is-active', ''); // IE friendly
    if (elm) {
      ui.active = elm;
      setActive(elm);
    }
  };

  const onPageScroll = (examples) => () => {
    const exampleCollection = [];
    let i = examples.length - 1;

    while (i--) {
      if (examples[i].getBoundingClientRect().top < -200) {
        exampleCollection.push(i);
      }
    }

    clearActive(ui.links[exampleCollection.length]);
    ui.listContent.scrollLeft = (ui.active.offsetLeft - ui.active.offsetWidth);

    // IE / Edge Sticky support
    if (!isSupported('position', 'sticky')) {
      ui.listContainer.style.top = 0;
      if (ui.scrollContainer.scrollTop > 180) {
        ui.listContainer.style.top = [(ui.scrollContainer.scrollTop - 180), 'px'].join('');
      }
    }
  };

  const onArrowClick = (dir) => {
    const newActive = ui.active[(dir === 'prev') ? 'previousSibling' : 'nextSibling'];

    clearActive();
    if (newActive) {
      setActive(newActive);
      ui.active = newActive;
    } else {
      ui.active = ui.links[(dir === 'prev') ? (ui.links.length - 1) : 0];
      setActive(ui.active);
    }

    ui.active.click();
  };

  /* Events */
  ui.listContent.addEventListener('click', (e) => {
    if (e.target.className.match('SgStyleguide__example-link')) {
      clearActive();
      e.target.children[0].click();

      const newScrollPos = ui.scrollContainer.scrollTop - 80;
      ui.scrollContainer.scrollTop = newScrollPos;
    }
  });

  ui.scrollContainer.addEventListener('scroll', onPageScroll(ui.examples));
  ui.arrowLeft.addEventListener('click', () => onArrowClick('prev'));
  ui.arrowRight.addEventListener('click', () => onArrowClick('next'));
};
