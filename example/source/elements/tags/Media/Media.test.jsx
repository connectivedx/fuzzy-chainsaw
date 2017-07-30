import test from 'tape';
import { shallow } from 'enzyme';

import { Media } from '@tags';


test('<Media>', (t) => {
  const component = shallow(
    <Media>
      <Media.Figure>abc</Media.Figure>
      <Media.Body>123</Media.Body>
    </Media>
  );
  t.ok(component.is('div'), 'tag name');
  t.ok(component.hasClass('Media'), 'tag class');
  t.equal(component.render().text(), 'abc123', 'text');
  t.end();
});

test('<Media align="bottom">', (t) => {
  const component = shallow(
    <Media align="bottom">
      <Media.Body>123</Media.Body>
      <Media.Figure>abc</Media.Figure>
    </Media>
  );
  t.ok(component.is('div'), 'tag name');
  t.ok(component.hasClass('Media'), 'tag class');
  t.ok(component.hasClass('Media--bottom'), 'variant class');
  t.equal(component.render().text(), '123abc', 'text');
  t.end();
});
