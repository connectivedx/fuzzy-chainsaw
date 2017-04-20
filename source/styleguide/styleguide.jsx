import styles from 'Styleguide/styleguide.css'; // eslint-disable-line

// browser Javascript
import Dom from 'react-dom';
import Nav from 'SgComponents/Nav/Nav';
import Example from 'SgComponents/Example/Example.Component';

const init = () => {
  Dom.render(<Nav />, document.querySelector('.sg-nav'));

  Array.prototype.slice.call(document.querySelectorAll('.sg-example'))
    .forEach((el) => {
      const exampleSection = el.querySelector('.sg-example__section--example');
      Dom.render(
        <Example
          slug={el.querySelector('.sg-expample__anchor').getAttribute('id')}
          exampleName={el.querySelector('.sg-example__name').innerText}
          exampleClasses={exampleSection.getAttribute('data-classname')}
          exampleOuput={exampleSection.innerHTML}
          reactOuput={el.querySelector('.sg-example__section--react').innerHTML}
          htmlOuput={el.querySelector('.sg-example__section--html').innerHTML}
          jsonOuput={el.querySelector('.sg-example__section--json').innerHTML}
        />,
        el
      );
    });
};


if (process.env.NODE_ENV === 'dev') {
  if (document.querySelector('.sg-styleguide')) {
    init();
  }
} else {
  init();
}
