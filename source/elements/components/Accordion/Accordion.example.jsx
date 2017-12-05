import { Accordion, Accordion__section, Accordion__title, Accordion__content } from './Accordion';

export default [{
  name: 'Default',
  component: (
    <Accordion>
      <Accordion__section>
        <Accordion__title>First Section</Accordion__title>
        <Accordion__content>
          <p>Accordion Section One</p>
        </Accordion__content>
      </Accordion__section>

      <Accordion__section>
        <Accordion__title>Second Section</Accordion__title>
        <Accordion__content>
          <p>Accordion Section Two</p>
        </Accordion__content>
      </Accordion__section>

      <Accordion__section>
        <Accordion__title>Third Section</Accordion__title>
        <Accordion__content>
          <p>Accordion Section Three</p>
        </Accordion__content>
      </Accordion__section>
    </Accordion>
  )
}, {
  name: 'Singly',
  component: (
    <Accordion singly="true">
      <Accordion__section>
        <Accordion__title>First Section</Accordion__title>
        <Accordion__content>
          <p>Accordion Section One</p>
        </Accordion__content>
      </Accordion__section>

      <Accordion__section>
        <Accordion__title>Second Section</Accordion__title>
        <Accordion__content>
          <p>Accordion Section Two</p>
        </Accordion__content>
      </Accordion__section>

      <Accordion__section>
        <Accordion__title>Third Section</Accordion__title>
        <Accordion__content>
          <p>Accordion Section Three</p>
        </Accordion__content>
      </Accordion__section>
    </Accordion>
  )
}, {
  name: 'Title Levels & Weights',
  component: (
    <Accordion>
      <Accordion__section>
        <Accordion__title level="h2" weight="thin">First Section</Accordion__title>
        <Accordion__content>
          <p>Accordion Section One</p>
        </Accordion__content>
      </Accordion__section>

      <Accordion__section>
        <Accordion__title level="h4" weight="medium">Second Section</Accordion__title>
        <Accordion__content>
          <p>Accordion Section Two</p>
        </Accordion__content>
      </Accordion__section>

      <Accordion__section>
        <Accordion__title level="h6" weight="bold">Third Section</Accordion__title>
        <Accordion__content>
          <p>Accordion Section Three</p>
        </Accordion__content>
      </Accordion__section>
    </Accordion>
  )
}];
