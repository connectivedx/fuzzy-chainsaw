import select from 'dom-select';

export default (el) => {
  const menuItems = select.all('.SgFileIndex__name', el);
  const activeItem = menuItems.filter((item, index) => {
    if (item.href.indexOf(window.location.pathname) >= 0) {
      return index + 1;
    }
    return false;
  });
  if (activeItem.length) {
    activeItem[0].classList.add('is-active');
  }
};
