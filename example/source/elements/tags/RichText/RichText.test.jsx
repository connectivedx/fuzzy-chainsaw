import test from 'tape';
import { shallow } from 'enzyme';

import { RichText } from '@tags';


test('<RichText />', (t) => {
  const component = shallow(<RichText>abc</RichText>);
  t.ok(component.is('div'), 'tag name');
  t.ok(component.hasClass('RichText'), 'tag class');
  t.end();
});
