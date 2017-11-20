import {
  Form,
  Form__fieldset,
  Form__legend,
  Form__label,
  Form__input,
  Form__inputOptionSet,
  Form__inputSelect,
  Form__textarea
} from './Form';

import {
  List,
  List__item
} from '../List/List';

export default [{
  name: 'Text field',
  component: (
    <Form>
      <Form__fieldset>
        <Form__legend>Form legend</Form__legend>
        <p>Fields marked with a * are <strong id="required">required</strong>.</p>
        <List variant="ordered">
          <List__item>
            <Form__label htmlFor="error-field">Error message <b role="presentation" className="required">*</b></Form__label>
            <Form__input forId="error-field" required aria-required="true" aria-describedby="error-field--error" />
            <span id="error-field--error" className="error error--hidden active">Example of field-level error message.</span>
          </List__item>
          <List__item>
            <Form__label htmlFor="success-field">Success message <b role="presentation" className="required">*</b></Form__label>
            <Form__input forId="success-field" required aria-required="true" aria-describedby="success-field--success" />
            <span id="success-field--success" className="success success--hidden active">Example of field-level success message.</span>
          </List__item>
          <List__item>
            <Form__label htmlFor="note-field">Note message <b role="presentation" className="required">*</b></Form__label>
            <Form__input forId="note-field" required aria-required="true" aria-describedby="note-field--success" />
            <span id="note-field--success" className="note note--hidden active">Example of field-level note message.</span>
          </List__item>
          <List__item>
            <Form__label htmlFor="text-field">Text field</Form__label>
            <Form__input forId="text-field" />
          </List__item>
          <List__item>
            <Form__label htmlFor="email-field">Email field</Form__label>
            <Form__input forId="email-field" type="email" placeholder="you@example.com" aria-required="true" />
          </List__item>
          <List__item>
            <Form__label htmlFor="search-field">Search field</Form__label>
            <Form__input forId="search-field" type="search" />
          </List__item>
          <List__item>
            <Form__label htmlFor="url-field">URL field</Form__label>
            <Form__input forId="url-field" type="url" placeholder="http://example.com" />
          </List__item>
          <List__item>
            <Form__label htmlFor="password-field">Password field</Form__label>
            <Form__input forId="password-field" type="password" />
          </List__item>
          <List__item>
            <Form__label htmlFor="date-field">Date field</Form__label>
            <Form__input forId="date-field" type="date" />
          </List__item>
          <List__item>
            <Form__label htmlFor="textarea-field">Textarea field</Form__label>
            <Form__textarea forId="textarea-field" cols="32" rows="8" />
          </List__item>
          <List__item>
            <Form__label htmlFor="select-field">Select field</Form__label>
            <Form__inputSelect
              id="select-field"
              options={[
                { value: 'menu-1', text: 'Menu Item 1' },
                { value: 'menu-2', text: 'Menu Item 2' },
                { value: 'menu-3', text: 'Menu Item 3' },
                { value: 'menu-4', text: 'Menu Item 4' }
              ]}
            />
          </List__item>
          <List__item>
            <Form__inputOptionSet
              id="option"
              legend="Radio buttons"
              type="radio"
              variant="radio"
              options={[
                { value: 'opt-1', text: 'Option #1' },
                { value: 'opt-2', text: 'Option #2' },
                { value: 'opt-3', text: 'Option #3' }
              ]}
            />
          </List__item>
          <List__item>
            <Form__inputOptionSet
              id="option"
              legend="Checkboxes"
              type="checkbox"
              variant="checkbox"
              options={[
                { value: 'opt-1', text: 'Option #1' },
                { value: 'opt-2', text: 'Option #2' },
                { value: 'opt-3', text: 'Option #3' }
              ]}
            />
          </List__item>
          <List__item>
            <Form__label htmlFor="range-type">Range type</Form__label>
            <Form__input forId="range-type" type="range" />
          </List__item>
          <List__item>
            <Form__label htmlFor="color-type">Color field</Form__label>
            <Form__input forId="color-type" type="color" />
          </List__item>
        </List>
      </Form__fieldset>
    </Form>
  )
}];
