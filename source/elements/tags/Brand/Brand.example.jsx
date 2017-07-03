import Brand from './Brand';

export default [{
  name: 'Default variant',
  component: (
    <Brand />
  )
}, {
  name: 'Compact variant',
  component: (
    <Brand variant="compact" />
  )
}];
