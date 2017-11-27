import Alert from './Alert';

export default [{
  name: 'Default Alert',
  component: (
    <Alert>Lorem ipsum</Alert>
  )
}, {
  name: 'Success Alert',
  component: (
    <Alert variant="success">Default alert</Alert>
  )
}, {
  name: 'Warning Alert',
  component: (
    <Alert variant="warning">Warning alert</Alert>
  )
}, {
  name: 'Error Alert',
  component: (
    <Alert variant="error">Error alert</Alert>
  )
}, {
  name: 'Information Alert',
  component: (
    <Alert variant="information">Information alert</Alert>
  )
}];
