import select from 'dom-select';

export default (el) => {
  const ui = {
    sectionToggles: select.all('.SgStyleguide__toggleTrigger', el)
  };

  // object used to update localStorage states
  const sectionToggleObj = {};

  // on load, loop through expandables in menu
  ui.sectionToggles.forEach((toggle) => {
    // toggle-related pieces
    const isReversed = toggle.classList.contains('SgStyleguide__toggleTrigger--reverse');
    const parent = toggle.parentNode;
    const target = select('.SgStyleguide__toggleTarget', parent);
    const expander = select('.SgExpander', toggle);

    // utility methods
    // opens toggle + content
    const activate = () => {
      toggle.classList.add('is-expanded');
      expander.classList.add('is-expanded');
      target.classList.add('is-expanded');
    };
    // updates object passed to localStorage
    const setState = (id, state) => {
      sectionToggleObj[id] = {
        state
      };
    };
    // updates localStorage
    const updateMenuToggleState = () => localStorage.setItem('menuToggleState', JSON.stringify(sectionToggleObj));

    // grab localStorage
    const menuToggleState = JSON.parse(localStorage.getItem('menuToggleState'));

    if (menuToggleState) {
      // if toggle state was open, open it
      // sort of duplicating classname toggling in SgExpander.Container
      if (menuToggleState[toggle.id] && menuToggleState[toggle.id].state === 'open') {
        activate();
      }

      // if there's no state object for the toggle, make one & update localStorage
      if (!menuToggleState[toggle.id]) {
        if (isReversed) {
          activate();
          setState(toggle.id, 'open');

          updateMenuToggleState();
        } else {
          setState(toggle.id, 'closed');

          updateMenuToggleState();
        }
      }
    } else {
      if (isReversed) {
        activate();
        setState(toggle.id, 'open');
        updateMenuToggleState();
      }

      // if there's no localStorage yet, make it
      setState(toggle.id, 'open');
      updateMenuToggleState();
    }
  });

  const handleSectionToggleClick = (toggle) => {
    const states = localStorage.getItem('menuToggleState') ? JSON.parse(localStorage.getItem('menuToggleState')) : sectionToggleObj;

    // on click, save state to localStorage
    if (toggle.classList.contains('is-expanded')) {
      states[toggle.id].state = 'closed';
      localStorage.setItem('menuToggleState', JSON.stringify(states));
    } else {
      states[toggle.id].state = 'open';
      localStorage.setItem('menuToggleState', JSON.stringify(states));
    }
  };

  // handle menu section toggle state on click
  ui.sectionToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      handleSectionToggleClick(toggle);
    });
  });
};
