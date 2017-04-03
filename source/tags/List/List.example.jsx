import { List, List_Item } from './List';

export default [{
  name: 'default',
  component: (
    <List>
      <List_Item>Horse</List_Item>
      <List_Item>Dog</List_Item>
      <List_Item className="is-leader">Pig</List_Item>
    </List>
  )
}, {
  name: 'ordered list',
  component: (
    <List variant="ordered">
      <List_Item className="is-leader">Pig</List_Item>
      <List_Item>Dog</List_Item>
      <List_Item>Horse</List_Item>
    </List>
  )
}, {
  name: 'blank list',
  component: (
    <List variant="blank">
      <List_Item className="is-leader">Pig</List_Item>
      <List_Item>Dog</List_Item>
      <List_Item>Horse</List_Item>
    </List>
  )
}, {
  name: 'list w/ class',
  component: (
    <List className="boogy-monster">
      <List_Item className="is-leader">Pig</List_Item>
      <List_Item>Dog</List_Item>
      <List_Item>Horse</List_Item>
    </List>
  )
}, {
  name: 'list item w/ class',
  component: (
    <List_Item className="yahoo">Horse</List_Item>
  )
}];
