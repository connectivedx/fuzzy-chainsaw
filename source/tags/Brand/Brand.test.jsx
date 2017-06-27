import test from 'tape';
import { shallow } from 'enzyme';

import Brand from './Brand';

test('<Brand />', (t) => {
  const component = shallow(<Brand />);
  t.ok(component.is('div'), 'tag name');
  t.ok(component.is('.Brand'), 'tag class');
  t.ok(component.is('.Brand--default'), 'variant class');
  t.end();
});

test('<Brand variant="compact" />', (t) => {
  const component = shallow(<Brand variant="compact" />);
  t.ok(component.is('div'), 'tag name');
  t.ok(component.is('.Brand'), 'tag class');
  t.ok(component.is('.Brand--compact'), 'variant class');
  t.end();
});
