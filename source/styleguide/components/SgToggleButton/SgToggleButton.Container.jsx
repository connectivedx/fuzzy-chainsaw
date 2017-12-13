export default (el) => {
  const primaryIcon = el.getAttribute('data-prime-asset');
  const secondaryIcon = el.getAttribute('data-second-asset');

  const icon = el.firstChild;

  el.addEventListener('click', () => {
    if (el.classList.contains('SgToggleButton--isActive')) {
      icon.firstChild.setAttribute('xlink:href', `#icon-${primaryIcon}`);
      el.classList.remove('SgToggleButton--isActive');
    } else {
      icon.firstChild.setAttribute('xlink:href', `#icon-${secondaryIcon}`);
      el.classList.add('SgToggleButton--isActive');
    }
  });
};
