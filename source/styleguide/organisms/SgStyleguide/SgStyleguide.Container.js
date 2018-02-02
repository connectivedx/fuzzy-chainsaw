import scroll from 'scroll';
import getSize from 'get-size';
import windowWidth from '@lib/windowWidth';

export default (el) => {
  /* query select needed pieces */
  const ui = {
    scrollContainer: document.querySelector('.SgScrollbars__container--content'), // content scrollbar container
    listContainer: el.querySelector('.SgStyleguide__section-header'), // wrapper around list
    listContent: el.querySelector('.SgStyleguide__section-examplesList'), // list of links
    arrowLeft: el.querySelector('.SgStyleguide__arrow--left'), // arrow left contained by wrapper
    arrowRight: el.querySelector('.SgStyleguide__arrow--right'), // arrow right contained by wrapper
    examples: el.querySelectorAll('.SgExample'),
    links: el.querySelectorAll('.SgStyleguide__example-link')
  };

  // keep track of page states
  const state = {
    scrollPosition: 0,
    listWidth: undefined, // getWidth(ui.listContent)
    containerWidth: undefined, // getWidth(ui.listContainer)
    maxScrollPosition: undefined,
    scrolledExamples: [],
    currentExample: 0,
    examplePositions: []
  };

  /* uses getSize to get width of passed node */
  const getWidth = (node) =>
    getSize(node).width;

  const getContentWidth = () => {
    let width = 0;

    for (let i = 0; i < ui.links.length; i++) {
      state.examplePositions[i] = width;
      width += getWidth(ui.links[i]);
    }

    state.listWidth = width + 40;
  };

  const updateArrowOverflow = () => {
    const leftOverflowing = state.scrollPosition > 0;
    const rightOverflowing = state.scrollPosition - state.maxScrollPosition < 0;

    ui.arrowLeft.setAttribute('aria-hidden', !leftOverflowing);
    ui.arrowLeft.setAttribute('tabindex', leftOverflowing ? 0 : -1);
    ui.arrowLeft.classList[leftOverflowing ? 'add' : 'remove']('is-overflowing');

    ui.arrowRight.setAttribute('aria-hidden', !rightOverflowing);
    ui.arrowRight.setAttribute('tabindex', rightOverflowing ? 0 : -1);
    ui.arrowRight.classList[rightOverflowing ? 'add' : 'remove']('is-overflowing');
  };

  const updateScrollPosition = () => {
    scroll.left(ui.listContent, state.scrollPosition);
  };

  const updateMaxScrollPosition = () => {
    state.maxScrollPosition = Math.round(state.listWidth - state.containerWidth);
  };

  const updateHighlightedExample = () => {
    for (let i = 0; i < ui.links.length; i++) {
      const isCurrent = state.currentExample === i;
      ui.links[i].classList[isCurrent ? 'add' : 'remove']('is-active');
    }

    scroll.left(ui.listContent, state.examplePositions[state.currentExample] - 40);
  };

  const onContentScroll = () => {
    state.scrollPosition = ui.listContent.scrollLeft;
    updateArrowOverflow();
  };

  const onPageScroll = (examples) => () => {
    const newExamplesObj = [];

    for (let i = 0; i < examples.length; i++) {
      const rect = examples[i].getBoundingClientRect();

      if (rect.top < 200) {
        newExamplesObj.push(i);
      }
    }

    if (state.scrolledExamples.slice(-1).pop() !== newExamplesObj.slice(-1).pop()) {
      state.scrolledExamples = newExamplesObj;

      if (!state.scrolledExamples.slice(-1).pop()) {
        state.currentExample = 0;
      } else if ((ui.scrollContainer.innerHeight + ui.scrollContainer.scrollY) >= ui.scrollContainer.offsetHeight) {
        state.currentExample = ui.links.length - 1;
      } else {
        state.currentExample = state.scrolledExamples.slice(-1).pop();
      }

      updateHighlightedExample();
    }
  };

  const onArrowClick = (isNext) => () => {
    if (isNext && state.scrollPosition + 400 > state.maxScrollPosition) {
      state.scrollPosition = state.maxScrollPosition;
    } else if (isNext) {
      state.scrollPosition += 400;
    } else if (state.scrollPosition - 400 < 0) {
      state.scrollPosition = 0;
    } else {
      state.scrollPosition -= 400;
    }

    updateScrollPosition();
  };

  /* when the window size changes, we need to set our new state values */
  const onWidthChange = (width) => {
    /* if the new window size affects the container width */
    if (state.containerWidth !== width) {
      state.containerWidth = width;

      updateMaxScrollPosition();

      updateArrowOverflow();
    }
  };

  const onLinkClick = (link) => {
    state.currentExample = link;
    updateHighlightedExample();
  };

  setTimeout(() => {
    state.containerWidth = getWidth(ui.listContainer);
    getContentWidth();
    updateMaxScrollPosition();
    updateArrowOverflow();
  }, 500);

  for (let i = 0; i < ui.links.length; i++) {
    ui.links[i].addEventListener('click', () => onLinkClick(i));
  }

  /* event watcher for change of window width. */
  windowWidth.change(() => getWidth(ui.listContainer), onWidthChange);

  /* event watcher for scrolling through list content */
  ui.listContent.addEventListener('scroll', onContentScroll);

  /* event watcher for page scroll */
  ui.scrollContainer.addEventListener('scroll', onPageScroll(ui.examples));

  /* event watcher for tab arrow clicks */
  ui.arrowLeft.addEventListener('click', onArrowClick(false));
  ui.arrowRight.addEventListener('click', onArrowClick(true));
};
