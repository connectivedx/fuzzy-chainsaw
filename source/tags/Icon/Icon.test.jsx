import test from 'tape';
import { shallow } from 'enzyme';

import Icon from './Icon';


test('<Icon name="close" /><Icon>', (t) => {
  const component = shallow(<Icon name="close" />);
  t.ok(component.is('svg'), 'tag name');
  t.ok(component.is('.Icon'), 'tag class');
  t.ok(component.is('.Icon--default'), 'size class');
  t.ok(component.is('.Icon--close'), 'icon name class');
  t.ok(component.find('use').length > 0, 'has children');
  t.end();
});

test('<Icon size="small" name="cancel" />', (t) => {
  const component = shallow(<Icon size="small" name="cancel" />);
  t.ok(component.is('.Icon--small'), 'size class');
  t.ok(component.is('.Icon--cancel'), 'icon name class');
  t.end();
});

test('<Icon size="large" name="plus" />', (t) => {
  const component = shallow(<Icon size="large" name="plus" />);
  t.ok(component.is('.Icon--large'), 'size class');
  t.ok(component.is('.Icon--plus'), 'icon name class');
  t.end();
});

test('<Icon size="wide" name="minus" />', (t) => {
  const component = shallow(<Icon size="wide" name="minus" />);
  t.ok(component.is('.Icon--wide'), 'size class');
  t.ok(component.is('.Icon--minus'), 'icon name class');
  t.end();
});

test('<Icon name="plus" variant="light" />', (t) => {
  const component = shallow(<Icon name="plus" variant="light" />);
  t.ok(component.is('.Icon'), 'icon class');
  t.ok(component.is('.Icon--plus'), 'icon name class');
  t.ok(component.is('.Icon--normal'), 'size class');
  t.ok(component.is('.Icon--light'), 'variant class');
  t.end();
});

test('<Icon name="plus" data-id="yoyoyo" />', (t) => {
  const component = shallow(<Icon name="plus" data-id="yoyoyo" />);
  t.ok(component.is('.Icon--plus'), 'icon name class');
  t.equal(component.props()['data-id'], 'yoyoyo', 'icon data attr');
  t.end();
});
