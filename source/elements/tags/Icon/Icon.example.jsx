import Icon from './Icon';


export default [{
  name: 'default',
  component: (
    <Icon name="close" />
  )
}, {
  name: 'small size',
  component: (
    <Icon size="small" name="cancel" />
  )
}, {
  name: 'large size',
  component: (
    <Icon size="large" name="plus" />
  )
}, {
  name: 'wide custom size',
  component: (
    <Icon size="wide" name="minus" />
  )
}, {
  name: 'light icon on dark background',
  options: {
    darkBackground: true
  },
  component: (
    <Icon name="plus" variant="light" />
  )
}, {
  name: 'extra attribute',
  component: (
    <Icon name="plus" data-id="yoyoyo" />
  )
}];
