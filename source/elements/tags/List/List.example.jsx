import {
  List,
  List__item
} from './List';


export default [{
  name: 'default',
  component: (
    <List>
      <List__item>Horse</List__item>
      <List__item>Dog</List__item>
      <List__item className="is-leader">Pig</List__item>
    </List>
  )
}, {
  name: 'ordered list',
  component: (
    <List variant="ordered">
      <List__item className="is-leader">Pig</List__item>
      <List__item>Dog</List__item>
      <List__item>Horse</List__item>
    </List>
  )
}, {
  name: 'blank list',
  component: (
    <List variant="blank">
      <List__item className="is-leader">Pig</List__item>
      <List__item>Dog</List__item>
      <List__item>Horse</List__item>
    </List>
  )
}, {
  name: 'list w/ class',
  component: (
    <List className="boogy-monster">
      <List__item className="is-leader">Pig</List__item>
      <List__item>Dog</List__item>
      <List__item>Horse</List__item>
    </List>
  )
}, {
  name: 'list item w/ class',
  component: (
    <List__item className="yahoo">Horse</List__item>
  )
}];
