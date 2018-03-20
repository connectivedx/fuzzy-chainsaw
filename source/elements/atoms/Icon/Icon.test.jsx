import test from 'tape';
import { shallow } from 'enzyme';

import Icon from './Icon';


test('<Icon name="close" /><Icon>', (t) => {
  const component = shallow(<Icon name="close" />);
  t.ok(component.is('svg'), 'tag name');
  t.ok(component.hasClass('icon'), 'tag class');
  t.ok(component.hasClass('icon--default'), 'size class');
  t.ok(component.hasClass('icon--close'), 'icon name class');
  t.ok(component.find('use').length > 0, 'has children');
  t.end();
});

test('<Icon size="small" name="cancel" />', (t) => {
  const component = shallow(<Icon size="small" name="cancel" />);
  t.ok(component.hasClass('icon--small'), 'size class');
  t.ok(component.hasClass('icon--cancel'), 'icon name class');
  t.end();
});

test('<Icon size="large" name="plus" />', (t) => {
  const component = shallow(<Icon size="large" name="plus" />);
  t.ok(component.hasClass('icon--large'), 'size class');
  t.ok(component.hasClass('icon--plus'), 'icon name class');
  t.end();
});

test('<Icon size="wide" name="minus" />', (t) => {
  const component = shallow(<Icon size="wide" name="minus" />);
  t.ok(component.hasClass('icon--wide'), 'size class');
  t.ok(component.hasClass('icon--minus'), 'icon name class');
  t.end();
});

test('<Icon name="plus" variant="light" />', (t) => {
  const component = shallow(<Icon name="plus" variant="light" />);
  t.ok(component.hasClass('icon'), 'icon class');
  t.ok(component.hasClass('icon--plus'), 'icon name class');
  t.ok(component.hasClass('icon--normal'), 'size class');
  t.ok(component.hasClass('icon--light'), 'variant class');
  t.end();
});

test('<Icon name="plus" data-id="yoyoyo" />', (t) => {
  const component = shallow(<Icon name="plus" data-id="yoyoyo" />);
  t.ok(component.hasClass('icon--plus'), 'icon name class');
  t.equal(component.props()['data-id'], 'yoyoyo', 'icon data attr');
  t.end();
});
