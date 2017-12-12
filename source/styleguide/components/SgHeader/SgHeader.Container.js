export default () => {
  const navButton = document.getElementById('openNavTrigger');

  const navigation = document.getElementById('SgNav');

  if (navigation) {
    navButton.addEventListener('click', () => {
      if (navigation.classList.contains('SgNav--isActive')) {
        navigation.classList.remove('SgNav--isActive');
        navButton.firstChild.setAttribute('xlink:href', '#icon-menu');
      } else {
        navigation.classList.add('SgNav--isActive');
        navButton.firstChild.setAttribute('xlink:href', '#icon-close');
      }
    });
  }
};
