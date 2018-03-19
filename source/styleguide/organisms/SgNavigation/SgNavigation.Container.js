import select from 'dom-select';

export default (el) => {
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
};
