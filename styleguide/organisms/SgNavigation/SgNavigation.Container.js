import select from 'dom-select';

export default (el) => {
  const ui = {
    shell: select('.SgPageShell'),
    nav: select('#sg-nav'),
    toggle: select('#sg-toggle')
  };

  const menuItems = select.all('.SgFileIndex__name', el);

  const activeItem = menuItems.filter((item) => {
    if (item.href.indexOf(window.location.pathname) >= 0) {
      return item;
    }
    return false;
  });

  if (activeItem.length && activeItem.length === 1) {
    activeItem[0].classList.add('is-active');
  }


  const closeMenu = () => {
    ui.shell.classList.remove('SgPageShell--navOpen');
    ui.toggle.classList.remove('SgToggleButton--is-active');
  };

  const openMenu = () => {
    ui.shell.classList.add('SgPageShell--navOpen');
    ui.toggle.classList.add('SgToggleButton--is-active');
  };

  const toggleNavMenu = () => {
    if (ui.shell.classList.contains('SgPageShell--navOpen')) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  closeMenu();

  // handle hamburger menu onClick
  ui.toggle.addEventListener('click', toggleNavMenu);
};
