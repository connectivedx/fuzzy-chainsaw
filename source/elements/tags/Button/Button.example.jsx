import Button from './Button';


export default [{
  name: 'Default styling',
  component: (
    <Button>Hello World</Button>
  )
}, {
  name: 'Linked button',
  component: (
    <Button href="#/">Hello World</Button>
  )
}, {
  name: 'Generic element with button styling',
  component: (
    <Button tagName="div">Hello World</Button>
  )
}, {
  name: 'Cta styling',
  component: (
    <Button variant="cta">Hello World</Button>
  )
}, {
  name: 'Full width styling',
  component: (
    <Button width="full">Hello World</Button>
  )
}, {
  name: 'Linked Cta button',
  component: (
    <Button href="#/" variant="cta">Hello World</Button>
  )
}];

