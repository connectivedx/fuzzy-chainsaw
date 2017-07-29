import test from 'tape';
import { shallow } from 'enzyme';

import { Brand } from '@tags';


test('<Brand />', (t) => {
  const component = shallow(<Brand />);
  t.ok(component.is('div'), 'tag name');
  t.ok(component.hasClass('Brand'), 'tag class');
  t.ok(component.hasClass('Brand--default'), 'variant class');
  t.end();
});

test('<Brand variant="compact" />', (t) => {
  const component = shallow(<Brand variant="compact" />);
  t.ok(component.is('div'), 'tag name');
  t.ok(component.hasClass('Brand'), 'tag class');
  t.ok(component.hasClass('Brand--compact'), 'variant class');
  t.end();
});
