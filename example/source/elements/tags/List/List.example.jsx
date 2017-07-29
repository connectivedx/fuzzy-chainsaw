import { List } from '@tags';


export default [{
  name: 'default',
  component: (
    <List>
      <List.Item>Horse</List.Item>
      <List.Item>Dog</List.Item>
      <List.Item className="is-leader">Pig</List.Item>
    </List>
  )
}, {
  name: 'ordered list',
  component: (
    <List variant="ordered">
      <List.Item className="is-leader">Pig</List.Item>
      <List.Item>Dog</List.Item>
      <List.Item>Horse</List.Item>
    </List>
  )
}, {
  name: 'blank list',
  component: (
    <List variant="blank">
      <List.Item className="is-leader">Pig</List.Item>
      <List.Item>Dog</List.Item>
      <List.Item>Horse</List.Item>
    </List>
  )
}, {
  name: 'list w/ class',
  component: (
    <List className="boogy-monster">
      <List.Item className="is-leader">Pig</List.Item>
      <List.Item>Dog</List.Item>
      <List.Item>Horse</List.Item>
    </List>
  )
}, {
  name: 'list item w/ class',
  component: (
    <List.Item className="yahoo">Horse</List.Item>
  )
}];
