import select from 'dom-select';

export default (el) => {
  const triggers = select.all('.SgStyleguide__toggleTrigger', el);

  if (triggers) {
    triggers.forEach((trigger) => {
      const parent = trigger.parentNode;
      const target = select('.SgStyleguide__toggleTarget', parent);
      const expander = select('.SgExpander', trigger);

      if (trigger.classList.contains('SgStyleguide__toggleTrigger--reverse')) {
        if (!parent.classList.contains('SgFileIndex')) {
          trigger.classList.add('is-expanded');
          expander.classList.add('is-expanded');
          target.classList.add('is-expanded');
        }
      }

      trigger.addEventListener('click', () => {
        trigger.classList.toggle('is-expanded');
        expander.classList.toggle('is-expanded');
        target.classList.toggle('is-expanded');
      });
    });
  }
};
