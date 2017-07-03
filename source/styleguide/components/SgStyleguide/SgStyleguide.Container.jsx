export default (el) => {
  const header = el.querySelector('.SgStyleguide__section-heading--readme');

  header.addEventListener('click', () => {
    el.classList.toggle('is-expanded');
  });
};
