import Accordion from './Accordion';

export default [{
  name: 'Default',
  component: (
    <Accordion>
      <section title="First Section">
        <p>Accordion Section One</p>
      </section>
      <section title="Second Section">
        <p>Accordion Section Two</p>
      </section>
      <section title="Third Section">
        <p>Accordion Section Three</p>
      </section>
    </Accordion>
  )
}, {
  name: 'Children as any node type',
  component: (
    <Accordion>
      <div title="First Section">
        <p>Accordion Section One</p>
      </div>
      <section title="Second Section">
        <p>Accordion Section Two</p>
      </section>
      <footer title="Third Section">
        <p>Accordion Section Three</p>
      </footer>
    </Accordion>
  )
}, {
  name: 'Heading levels & weights',
  component: (
    <Accordion>
      <section title="First Section" level="h6" weight="thin">
        <p>Accordion Section One</p>
      </section>
      <section title="Second Section" level="h3" weight="medium">
        <p>Accordion Section Two</p>
      </section>
      <section title="Third Section" level="h1" weight="bold">
        <p>Accordion Section Three</p>
      </section>
    </Accordion>
  )
}, {
  name: 'Stateless icons',
  component: (
    <Accordion>
      <section title="First Section" level="h3" icon="cancel">
        <p>Accordion Section One</p>
      </section>
      <section title="Second Section" level="h3" icon="close">
        <p>Accordion Section Two</p>
      </section>
      <section title="Third Section" level="h3" icon="plus">
        <p>Accordion Section Three</p>
      </section>
    </Accordion>
  )
}, {
  name: 'Stateful icons',
  component: (
    <Accordion>
      <section title="First Section" level="h3" closeIcon="plus" openIcon="minus">
        <p>Accordion Section One</p>
      </section>
      <section title="Second Section" level="h3" closeIcon="plus" openIcon="minus">
        <p>Accordion Section Two</p>
      </section>
      <section title="Third Section" level="h3" closeIcon="plus" openIcon="minus">
        <p>Accordion Section Three</p>
      </section>
    </Accordion>
  )
}, {
  name: 'Single sections only',
  component: (
    <Accordion singly="true">
      <section title="First Section">
        <p>Accordion Section One</p>
      </section>
      <section title="Second Section">
        <p>Accordion Section Two</p>
      </section>
      <section title="Third Section">
        <p>Accordion Section Three</p>
      </section>
    </Accordion>
  )
}];
