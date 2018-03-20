import select from 'dom-select';

export default (el) => {
  const ui = {
    shell: el,
    nav: select('#sg-nav'),
    toggle: select('#sg-toggle')
  };

  // get menu drawer state from localStorage
  const menuDrawerState = localStorage.getItem('menuDrawerState');

  const closeMenu = () => {
    ui.shell.classList.remove('SgPageShell--navOpen');
    ui.toggle.classList.remove('SgToggleButton--is-active');
    localStorage.setItem('menuDrawerState', 'closed');
  };

  const openMenu = () => {
    ui.shell.classList.add('SgPageShell--navOpen');
    ui.toggle.classList.add('SgToggleButton--is-active');
    localStorage.setItem('menuDrawerState', 'open');
  };

  const toggleNavMenu = () => {
    if (ui.shell.classList.contains('SgPageShell--navOpen')) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  // check localStorage state and open menu if applicable
  if (menuDrawerState === 'open') {
    openMenu();
  }

  // handle hamburger menu onClick
  ui.toggle.addEventListener('click', toggleNavMenu);
};
