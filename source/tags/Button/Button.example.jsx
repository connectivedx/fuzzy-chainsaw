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
  name: 'Div with button styling',
  component: (
    <Button tagName="div">Hello World</Button>
  )
}, {
  name: 'CTA styling',
  component: (
    <Button variant="cta">Hello World</Button>
  )
}, {
  name: 'Linked CTA button',
  component: (
    <Button href="#/" variant="cta">Hello World</Button>
  )
}];

