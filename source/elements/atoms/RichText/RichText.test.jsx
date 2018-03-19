import test from 'tape';
import { shallow } from 'enzyme';

import RichText from './RichText';


test('<RichText />', (t) => {
  const component = shallow(<RichText>abc</RichText>);
  t.ok(component.is('div'), 'tag name');
  t.ok(component.hasClass('rich-text'), 'tag class');
  t.end();
});
