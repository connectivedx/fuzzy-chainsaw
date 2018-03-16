export default (el) => {
  el.addEventListener('keyup', (e) => {
    const query = e.target.value;
    const icons = document.querySelectorAll('.SgIconSwatch');
    let i = icons.length;
    // unable to consolidate to single loop
    if (query.length === 0) {
      while (i--) {
        icons[i].removeAttribute('style');
      }
    } else {
      while (i--) {
        if (!icons[i].dataset.iconName.match(query)) {
          icons[i].style.display = 'none';
        } else {
          icons[i].removeAttribute('style');
        }
      }
    }
  });
};
