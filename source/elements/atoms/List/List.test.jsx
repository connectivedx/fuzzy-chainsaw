import test from 'tape';
import { shallow } from 'enzyme';

import {
  List,
  List__item
} from './List';


test('<List>', (t) => {
  const component = shallow(<List><List__item>X</List__item></List>);
  t.ok(component.is('ul'), 'tag name');
  t.ok(component.hasClass('list'), 'tag class');
  t.ok(component.hasClass('list--unordered'), 'tag class');
  t.end();
});

test('<List variant="ordered">', (t) => {
  const component = shallow(<List variant="ordered"><List__item>X</List__item><List__item>X</List__item></List>);
  t.ok(component.is('ol'), 'tag name');
  t.ok(component.hasClass('list'), 'tag class');
  t.ok(component.hasClass('list--ordered'), 'tag class');
  t.equal(component.children().length, 2, 'number of children');
  t.end();
});

test('<List variant="blank">', (t) => {
  const component = shallow(<List variant="blank"><List__item>X</List__item><List__item>X</List__item></List>);
  t.ok(component.is('ul'), 'tag name');
  t.ok(component.hasClass('list'), 'tag class');
  t.ok(component.hasClass('list--blank'), 'tag class');
  t.equal(component.children().length, 2, 'number of children');
  t.end();
});

test('<List className="boogy-monster">', (t) => {
  const component = shallow(<List className="boogy-monster">Yep</List>);
  t.ok(component.is('ul'), 'tag name');
  t.ok(component.hasClass('list'), 'tag class');
  t.ok(component.hasClass('list--unordered'), 'tag class');
  t.ok(component.hasClass('boogy-monster'), 'additional class');
  t.end();
});

test('<List variant="definition">', (t) => {
  const component = shallow(<List variant="definition"><List__item variant="term">X</List__item><List__item variant="description">X</List__item></List>);
  t.ok(component.is('dl'), 'tag name');
  t.ok(component.hasClass('list'), 'tag class');
  t.ok(component.hasClass('list--definition'), 'tag class');
  t.equal(component.children().length, 2, 'number of children');
  t.end();
});

test('<List__item className="yahoo">', (t) => {
  const component = shallow(<List__item className="yahoo">Horse</List__item>);
  t.ok(component.is('li'), 'tag name');
  t.ok(component.hasClass('list__item'), 'tag class');
  t.ok(component.hasClass('yahoo'), 'additional class');
  t.equal(component.render().text(), 'Horse', 'content');
  t.end();
});

test('<List__item variant="term" className="yahoo">', (t) => {
  const component = shallow(<List__item variant="term">Horse</List__item>);
  t.ok(component.is('dt'), 'tag name');
  t.ok(component.hasClass('list__item'), 'tag class');
  t.ok(component.hasClass('list__item--term'), 'additional class');
  t.equal(component.render().text(), 'Horse', 'content');
  t.end();
});

test('<List__item variant="description" className="yahoo">', (t) => {
  const component = shallow(<List__item variant="description">Horse</List__item>);
  t.ok(component.is('dd'), 'tag name');
  t.ok(component.hasClass('list__item'), 'tag class');
  t.ok(component.hasClass('list__item--description'), 'additional class');
  t.equal(component.render().text(), 'Horse', 'content');
  t.end();
});
