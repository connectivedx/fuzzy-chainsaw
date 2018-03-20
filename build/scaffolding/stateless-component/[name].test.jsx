import test from 'tape';
import { shallow } from 'enzyme';

import {{name}} from './{{name}}';

test('<{{name}}>', (t) => {
  const component = shallow(<{{name}}>Hello World</{{name}}>);
  t.ok(component.is('div'), 'tag name');
  t.ok(component.is('.{{cssName}}'), 'tag class');
  t.equal(component.text(), 'Hello World', 'text');
  t.end();
});
