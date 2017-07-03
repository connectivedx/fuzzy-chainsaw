import test from 'tape';
import { shallow } from 'enzyme';

import { Media, Media__figure, Media__body } from './Media';


test('<Media>', (t) => {
  const component = shallow(
    <Media>
      <Media__figure>abc</Media__figure>
      <Media__body>123</Media__body>
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
      <Media__body>123</Media__body>
      <Media__figure>abc</Media__figure>
    </Media>
  );
  t.ok(component.is('div'), 'tag name');
  t.ok(component.hasClass('Media'), 'tag class');
  t.ok(component.hasClass('Media--bottom'), 'variant class');
  t.equal(component.render().text(), '123abc', 'text');
  t.end();
});
