import test from 'tape';
import { shallow } from 'enzyme';

import Grid from './Grid';

test('<Grid>', (t) => {
  const component = shallow(<Grid>Hello World</Grid>);
  t.ok(component.is('div'), 'tag name');
  t.ok(component.is('.Grid'), 'tag class');
  t.equal(component.text(), 'Hello World', 'text');
  t.end();
});
