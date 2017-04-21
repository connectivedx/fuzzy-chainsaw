import test from 'tape';
import { shallow } from 'enzyme';

import { Media, Media_Figure, Media_Body } from './Media';


test('<Media>', (t) => {
  const component = shallow(
    <Media>
      <Media_Figure>slime</Media_Figure>
      <Media_Body>slime</Media_Body>
    </Media>
  );
  t.ok(component.is('div'), 'tag name');
  t.ok(component.is('.Media'), 'tag class');
  t.equal(component.text(), '<Media_Figure /><Media_Body />', 'text');
  t.end();
});

test('<Media align="bottom">', (t) => {
  const component = shallow(
    <Media align="bottom">
      <Media_Body>slime</Media_Body>
      <Media_Figure>slime</Media_Figure>
    </Media>
  );
  t.ok(component.is('div'), 'tag name');
  t.ok(component.is('.Media'), 'tag class');
  t.equal(component.text(), '<Media_Body /><Media_Figure />', 'text');
  t.end();
});
