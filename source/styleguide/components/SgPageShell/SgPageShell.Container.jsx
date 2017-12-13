export default (el) => {
  /* grab ui elements */
  const navButton = document.getElementById('SgNavToggle');
  const navigation = document.getElementById('SgNavigation');
  const header = document.getElementById('SgGlobalHeaderTitle');

  /* functions triggered on click */

  navButton.addEventListener('click', () => {
    if (navigation.classList.contains('SgNavigation--isActive')) {
      navigation.classList.remove('SgNavigation--isActive');
      navButton.classList.remove('SgGlobalHeader__toggle--navIsOpen');
      header.classList.remove('SgGlobalHeader__title--navIsOpen');
      el.classList.remove('SgPageShell--openNav');
    } else {
      navigation.classList.add('SgNavigation--isActive');
      navButton.classList.add('SgGlobalHeader__toggle--navIsOpen');
      header.classList.add('SgGlobalHeader__title--navIsOpen');
      el.classList.add('SgPageShell--openNav');
    }
  });

  /* functions triggered on page scroll */

  window.addEventListener('scroll', () => {
    const scrollNum = document.documentElement.scrollTop;
    if (scrollNum > 16) {
      navButton.classList.add('SgToggleButton--border');
    } else {
      navButton.classList.remove('SgToggleButton--border');
    }

    if (scrollNum > 80) {
      navigation.classList.add('SgNavigation--isSticky');
    } else {
      navigation.classList.remove('SgNavigation--isSticky');
    }
  });
};

