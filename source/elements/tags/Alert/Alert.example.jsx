import Alert from './Alert';
import Link from '../Link/Link';

export default [{
  name: 'Page-level Default Alert',
  component: (
    <Alert>Page-level default alert with a <Link href="/">link text</Link></Alert>
  )
}, {
  name: 'Page-level Success Alert',
  component: (
    <Alert variant="success">Page-level success message with a <Link href="/" variant="dark">link text</Link></Alert>
  )
}, {
  name: 'Page-level Warning Alert',
  component: (
    <Alert variant="warning">Page-level warning alert with a <Link href="/">link text</Link></Alert>
  )
}, {
  name: 'Page-level Error Alert',
  component: (
    <Alert variant="error">Page-level error alert with a <Link href="/">link text</Link></Alert>
  )
}, {
  name: 'Page-level Information Alert',
  component: (
    <Alert variant="information">Page-level information message with a <Link href="/">link text</Link></Alert>
  )
}, {
  name: 'Form-level Success Alert',
  component: (
    <Alert level="form" variant="success">Form-level success message with a <Link href="/">link text</Link></Alert>
  )
}, {
  name: 'Form-level Warning Alert',
  component: (
    <Alert level="form" variant="warning">Form-level warning alert with a <Link href="/">link text</Link></Alert>
  )
}, {
  name: 'Form-level Error Alert',
  component: (
    <Alert level="form" variant="error">Form-level error alert with a <Link href="/">link text</Link></Alert>
  )
}, {
  name: 'Form-level Information Alert',
  component: (
    <Alert level="form" variant="information">Form-level information message with a <Link href="/">link text</Link></Alert>
  )
}, {
  name: 'Field-level Success Alert',
  component: (
    <Alert level="field" variant="success">Field-level success message</Alert>
  )
}, {
  name: 'Field-level Error Alert',
  component: (
    <Alert level="field" variant="error">Field-level error alert</Alert>
  )
}, {
  name: 'Field-level information/note Alert',
  component: (
    <Alert level="field" variant="information">Field-level information/note message</Alert>
  )
}];
