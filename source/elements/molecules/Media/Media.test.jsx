import test from 'tape';
import { shallow } from 'enzyme';

import {
  Media,
  Media__figure,
  Media__body
} from './Media';


const testA = (
  <Media>
    <Media__figure>abc</Media__figure>
    <Media__body>123</Media__body>
  </Media>
);

test('<Media>', (t) => {
  const component = shallow(testA);
  t.ok(component.is('div'), 'tag name');
  t.ok(component.hasClass('media'), 'tag class');
  t.equal(component.render().text(), 'abc123', 'text');
  t.end();
});

const testB = (
  <Media align="bottom">
    <Media__body>123</Media__body>
    <Media__figure>abc</Media__figure>
  </Media>
);

test('<Media align="bottom">', (t) => {
  const component = shallow(testB);
  t.ok(component.is('div'), 'tag name');
  t.ok(component.hasClass('media'), 'tag class');
  t.ok(component.hasClass('media--bottom'), 'variant class');
  t.equal(component.render().text(), '123abc', 'text');
  t.end();
});
