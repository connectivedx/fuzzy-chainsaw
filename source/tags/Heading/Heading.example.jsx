import Heading from './Heading';

export default [{
  name: 'default',
  component: (
    <Heading>
      Hello
    </Heading>
  )
}, {
  name: 'tagName',
  component: (
    <Heading level="3">
      Wowie Zowie
    </Heading>
  )
}, {
  name: 'className/variant',
  component: (
    <Heading className="super" variant="medium">
      Leg Shaking
    </Heading>
  )
}, {
  name: 'tagName/className/variant',
  component: (
    <Heading tagName="div" className="duper" variant="thin">
      Back Breaking
    </Heading>
  )
}];
