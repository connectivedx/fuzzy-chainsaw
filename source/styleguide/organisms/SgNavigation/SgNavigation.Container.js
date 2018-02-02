import select from 'dom-select';

export default (el) => {
  const menuItems = select.all('.SgFileIndex__name', el);
  const activeItem = menuItems.filter((item) => item.href.indexOf(window.location.pathname));

  if (activeItem) {
    activeItem[0].classList.add('is-active');
  }
};
