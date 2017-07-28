import test from 'tape';
import { shallow } from 'enzyme';

import PlaceholderSvg from './PlaceholderSvg';

test('<PlaceholderSvg />', (t) => {
  const component = shallow(<PlaceholderSvg />);
  t.ok(component.is('svg'), 'tag name');
  t.equal(component.render().text(), 'FPO', 'text');
  t.end();
});
