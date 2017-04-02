import { List, List_Item } from './List';

export default [{
  name: 'default',
  component: (
    <List>
      <List_Item>Horse</List_Item>
      <List_Item>Dog</List_Item>
      <List_Item className="is-leader">Pig</List_Item>
    </List>
  ),
  test(t, component) {
    t.equal(component.is('ul'), true, 'tag name');
    t.equal(component.is('.list'), true, 'tag class');
    t.equal(component.is('.list--unordered'), true, 'tag class');
    t.equal(component.children().length, 3, 'number of children');
    t.end();
  }
}, {
  name: 'ordered list',
  component: (
    <List variant="ordered">
      <List_Item className="is-leader">Pig</List_Item>
      <List_Item>Dog</List_Item>
      <List_Item>Horse</List_Item>
    </List>
  ),
  test(t, component) {
    t.equal(component.is('ol'), true, 'tag name');
    t.equal(component.is('.list'), true, 'tag class');
    t.equal(component.is('.list--ordered'), true, 'tag class');
    t.equal(component.children().length, 3, 'number of children');
    t.end();
  }
}, {
  name: 'blank list',
  component: (
    <List variant="blank">
      <List_Item className="is-leader">Pig</List_Item>
      <List_Item>Dog</List_Item>
      <List_Item>Horse</List_Item>
    </List>
  ),
  test(t, component) {
    t.equal(component.is('ul'), true, 'tag name');
    t.equal(component.is('.list'), true, 'tag class');
    t.equal(component.is('.list--blank'), true, 'tag class');
    t.equal(component.children().length, 3, 'number of children');
    t.end();
  }
}, {
  name: 'list w/ class',
  component: (
    <List className="boogy-monster">
      <List_Item className="is-leader">Pig</List_Item>
      <List_Item>Dog</List_Item>
      <List_Item>Horse</List_Item>
    </List>
  ),
  test(t, component) {
    t.equal(component.is('ul'), true, 'tag name');
    t.equal(component.is('.list'), true, 'tag class');
    t.equal(component.is('.list--unordered'), true, 'tag class');
    t.equal(component.is('.boogy-monster'), true, 'additional class');
    t.equal(component.children().length, 3, 'number of children');
    t.end();
  }
}, {
  name: 'list item w/ class',
  component: (
    <List_Item className="yahoo">Horse</List_Item>
  ),
  test(t, component) {
    t.equal(component.is('li'), true, 'tag name');
    t.equal(component.is('.list__item'), true, 'tag class');
    t.equal(component.is('.yahoo'), true, 'additional class');
    t.equal(component.text(), 'Horse', 'content');
    t.end();
  }
}];
