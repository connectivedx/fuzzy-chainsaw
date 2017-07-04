export default (el) => {
  const section = el.querySelector('.SgStyleguide__section--readme');
  const header = el.querySelector('.SgStyleguide__section-heading--readme');

  if (section) {
    header.addEventListener('click', () => {
      section.classList.toggle('is-expanded');
    });
  }
};
