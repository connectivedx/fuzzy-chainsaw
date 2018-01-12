import Alert from './Alert';
import Heading from '../Heading/Heading';
import Link from '../Link/Link';

export default [{
  name: 'Page-level Success Alert',
  component: (
    <Alert variant="success">
      <Heading level="h3">Success message</Heading>
      <p>Page-level success message with a <Link href="/">link text</Link></p>
    </Alert>
  )
}, {
  name: 'Page-level Warning Alert',
  component: (
    <Alert variant="warning">
      <Heading level="h3">Warning message</Heading>
      <p>Page-level warning alert with a <Link href="/">link text</Link></p>
    </Alert>
  )
}, {
  name: 'Page-level Error Alert',
  component: (
    <Alert variant="error">
      <Heading level="h3">Error message</Heading>
      <p>Page-level error alert with a <Link href="/">link text</Link></p>
    </Alert>
  )
}, {
  name: 'Page-level Information Alert',
  component: (
    <Alert variant="information">
      <Heading level="h3">Information message</Heading>
      <p>Page-level information message with a <Link href="/">link text</Link></p>
    </Alert>
  )
}, {
  name: 'Form-level Success Alert',
  component: (
    <Alert level="form" variant="success">
      <Heading level="h3">Success message</Heading>
      <p>Form-level success message with a <Link href="/">link text</Link></p>
    </Alert>
  )
}, {
  name: 'Form-level Warning Alert',
  component: (
    <Alert level="form" variant="warning">
      <Heading level="h3">Warning message</Heading>
      <p>Form-level warning alert with a <Link href="/">link text</Link></p>
    </Alert>
  )
}, {
  name: 'Form-level Error Alert',
  component: (
    <Alert level="form" variant="error">
      <Heading level="h3">Error message</Heading>
      <p>Form-level error alert with a <Link href="/">link text</Link></p>
    </Alert>
  )
}, {
  name: 'Form-level Information Alert',
  component: (
    <Alert level="form" variant="information">
      <Heading level="h3">Information message</Heading>
      <p>Form-level information message with a <Link href="/">link text</Link></p>
    </Alert>
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
