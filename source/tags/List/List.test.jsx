import test from 'tape';
import { shallow } from 'enzyme';

import { List, List_Item } from './List';


test('<List>', (t) => {
  const component = shallow(<List><List_Item>X</List_Item></List>);
  t.ok(component.is('ul'), 'tag name');
  t.ok(component.is('.list'), 'tag class');
  t.ok(component.is('.list--unordered'), 'tag class');
  t.end();
});

test('<List variant="ordered">', (t) => {
  const component = shallow(<List variant="ordered"><List_Item>X</List_Item><List_Item>X</List_Item></List>);
  t.ok(component.is('ol'), 'tag name');
  t.ok(component.is('.list'), 'tag class');
  t.ok(component.is('.list--ordered'), 'tag class');
  t.equal(component.children().length, 2, 'number of children');
  t.end();
});

test('<List variant="blank">', (t) => {
  const component = shallow(<List variant="blank"><List_Item>X</List_Item><List_Item>X</List_Item></List>);
  t.ok(component.is('ul'), 'tag name');
  t.ok(component.is('.list'), 'tag class');
  t.ok(component.is('.list--blank'), 'tag class');
  t.equal(component.children().length, 2, 'number of children');
  t.end();
});

test('<List className="boogy-monster">', (t) => {
  const component = shallow(<List className="boogy-monster">Yep</List>);
  t.ok(component.is('ul'), 'tag name');
  t.ok(component.is('.list'), 'tag class');
  t.ok(component.is('.list--unordered'), 'tag class');
  t.ok(component.is('.boogy-monster'), 'additional class');
  t.end();
});

test('<List_Item className="yahoo">', (t) => {
  const component = shallow(<List_Item className="yahoo">Horse</List_Item>);
  t.ok(component.is('li'), 'tag name');
  t.ok(component.is('.list__item'), 'tag class');
  t.ok(component.is('.yahoo'), 'additional class');
  t.equal(component.text(), 'Horse', 'content');
  t.end();
});
