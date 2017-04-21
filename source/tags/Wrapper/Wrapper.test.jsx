import test from 'tape';
import { shallow } from 'enzyme';

import Wrapper from './Wrapper';

test('<Wrapper />', (t) => {
  const component = shallow(<Wrapper>abc</Wrapper>);
  t.ok(component.is('div'), 'tag name');
  t.ok(component.is('.Wrapper'), 'tag class');
  t.end();
});

test('<Wrapper size="small" />', (t) => {
  const component = shallow(<Wrapper size="small">abc</Wrapper>);
  t.ok(component.is('div'), 'tag name');
  t.ok(component.is('.Wrapper'), 'tag class');
  t.ok(component.is('.Wrapper--small'), 'tag class');
  t.end();
});
