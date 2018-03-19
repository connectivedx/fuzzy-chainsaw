import test from 'tape';
import { shallow } from 'enzyme';

import Rhythm from './Rhythm';


test('<Rhythm />', (t) => {
  const component = shallow(<Rhythm>abc</Rhythm>);
  t.ok(component.is('div'), 'tag name');
  t.ok(component.hasClass('rhythm--default'), 'class name');
  t.ok(component.render().text(), 'abc');
  t.end();
});
