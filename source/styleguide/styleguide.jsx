import styles from 'Styleguide/styleguide.css'; // eslint-disable-line

// browser Javascript
import Dom from 'react-dom';
import SgNav from 'SgComponents/SgNav/SgNav';
import SgExample from 'SgComponents/SgExample/SgExample.Component';


const init = () => {
  Dom.render(<SgNav />, document.querySelector('.SgNav'));

  Array.prototype.slice.call(document.querySelectorAll('.SgExample'))
    .forEach((el) => {
      const exampleSection = el.querySelector('.SgExample__section--example');
      Dom.render(
        <SgExample
          slug={el.querySelector('.SgExample__anchor').getAttribute('id')}
          exampleName={el.querySelector('.SgExample__name').innerText}
          exampleClasses={exampleSection.getAttribute('data-classname')}
          exampleOuput={exampleSection.innerHTML}
          reactOuput={el.querySelector('.SgExample__section--react').innerHTML}
          htmlOuput={el.querySelector('.SgExample__section--html').innerHTML}
          jsonOuput={el.querySelector('.SgExample__section--json').innerHTML}
        />,
        el
      );
    });
};


if (document.querySelector('.SgStyleguide')) {
  init();
}
