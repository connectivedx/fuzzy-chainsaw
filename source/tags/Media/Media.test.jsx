import test from 'tape';
import { shallow } from 'enzyme';

import { Media, Media__figure, Media__body } from './Media';


test('<Media>', (t) => {
  const component = shallow(
    <Media>
      <Media__figure>slime</Media__figure>
      <Media__body>slime</Media__body>
    </Media>
  );
  t.ok(component.is('div'), 'tag name');
  t.ok(component.is('.Media'), 'tag class');
  t.equal(component.text(), '<Media__figure /><Media__body />', 'text');
  t.end();
});

test('<Media align="bottom">', (t) => {
  const component = shallow(
    <Media align="bottom">
      <Media__body>slime</Media__body>
      <Media__figure>slime</Media__figure>
    </Media>
  );
  t.ok(component.is('div'), 'tag name');
  t.ok(component.is('.Media'), 'tag class');
  t.equal(component.text(), '<Media__body /><Media__figure />', 'text');
  t.end();
});
