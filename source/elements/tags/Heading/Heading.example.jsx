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
    <Heading tagName="h3">
      Wowie Zowie
    </Heading>
  )
}, {
  name: 'className/variant',
  component: (
    <Heading className="super" weight="medium">
      Leg Shaking
    </Heading>
  )
}, {
  name: 'tagName/className/variant',
  component: (
    <Heading tagName="div" className="duper" level="h3" weight="thin">
      Back Breaking
    </Heading>
  )
}];
