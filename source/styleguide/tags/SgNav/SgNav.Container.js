export default (el) => {
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 80) {
      el.classList.add('SgNav--isSticky');
    } else {
      el.classList.remove('SgNav--isSticky');
    }
  });
};
