import test from 'tape';
import { shallow } from 'enzyme';

import Wrapper from './Wrapper';

test('<Wrapper />', (t) => {
  const component = shallow(<Wrapper>abc</Wrapper>);
  t.ok(component.is('div'), 'tag name');
  t.ok(component.hasClass('Wrapper'), 'tag class');
  t.end();
});

test('<Wrapper size="narrow" />', (t) => {
  const component = shallow(<Wrapper size="narrow">abc</Wrapper>);
  t.ok(component.is('div'), 'tag name');
  t.ok(component.hasClass('Wrapper'), 'tag class');
  t.ok(component.hasClass('Wrapper--narrow'), 'tag class');
  t.end();
});
