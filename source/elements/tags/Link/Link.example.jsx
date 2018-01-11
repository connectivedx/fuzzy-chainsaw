import Link from './Link';


export default [{
  name: 'Default styling',
  component: (
    <Link href="#slime">Lorem ipsum</Link>
  )
}, {
  name: 'Cta styling',
  component: (
    <Link href="#slime" variant="cta">Click me</Link>
  )
}, {
  name: 'Dark styling',
  component: (
    <Link href="#slime" variant="dark">Click me</Link>
  )
}, {
  name: 'Light styling',
  options: {
    darkBackground: true
  },
  component: (
    <Link href="#slime" variant="light">Click me</Link>
  )
}];
