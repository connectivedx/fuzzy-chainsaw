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
  name: 'Legend',
  component: (
    <Form__legend>Form legend</Form__legend>
  )
}, {
  name: 'Text input label',
  component: (
    <Form__fieldset>
      <List variant="ordered">
        <List__item>
          <Form__label htmlFor="input-field">Text input label</Form__label>
          <Form__input id="input-field" />
        </List__item>
      </List>
    </Form__fieldset>
  )
}, {
  name: 'Focused input field',
  component: (
    <Form__fieldset>
      <List variant="ordered">
        <List__item>
          <Form__label htmlFor="text-field--focused">Text input focused</Form__label>
          <Form__input id="text-field--focused" />
        </List__item>
      </List>
    </Form__fieldset>
  )
}, {
  name: 'Required input',
  component: (
    <Form__fieldset>
      <List variant="ordered">
        <List__item>
          <Form__label htmlFor="required-field">Text field <b role="presentation" className="required">*</b></Form__label>
          <Form__input id="required-field" required aria-required="true" aria-describedby="error-field--error" />
        </List__item>
      </List>
    </Form__fieldset>
  )
}, {
  name: 'Input error message',
  component: (
    <Form__fieldset>
      <List variant="ordered">
        <List__item>
          <Form__label htmlFor="error-field">Error message <b role="presentation" className="required">*</b></Form__label>
          <Form__input id="error-field" className="input-error" required aria-required="true" aria-describedby="error-field--error" />
          <span id="error-field--error" className="input-error--message error--hidden active" role="alert">Example of field-level error message.</span>
        </List__item>
      </List>
    </Form__fieldset>
  )
}, {
  name: 'Input success message',
  component: (
    <Form__fieldset>
      <List variant="ordered">
        <List__item>
          <Form__label htmlFor="success-field">Success message <b role="presentation" className="required">*</b></Form__label>
          <Form__input id="success-field" className="input-success" required aria-required="true" aria-describedby="success-field--success" />
          <span id="success-field--success" className="input-success--message success--hidden active" aria-live="polite">Example of field-level success message.</span>
        </List__item>
      </List>
    </Form__fieldset>
  )
}, {
  name: 'Input note message',
  component: (
    <Form__fieldset>
      <List variant="ordered">
        <List__item>
          <Form__label htmlFor="note-field">Note message</Form__label>
          <Form__input id="note-field" />
          <span id="note-field--success" className="note note--hidden active" aria-live="polite">Example of field-level note message.</span>
        </List__item>
      </List>
    </Form__fieldset>
  )
}, {
  name: 'Email input field',
  component: (
    <Form__fieldset>
      <List variant="ordered">
        <List__item>
          <Form__label htmlFor="email-field">Email field</Form__label>
          <Form__input id="email-field" type="email" placeholder="you@example.com" />
        </List__item>
      </List>
    </Form__fieldset>
  )
}, {
  name: 'Search input field',
  component: (
    <Form__fieldset>
      <List variant="ordered">
        <List__item>
          <Form__label htmlFor="search-field">Search field</Form__label>
          <Form__input id="search-field" type="search" />
        </List__item>
      </List>
    </Form__fieldset>
  )
}, {
  name: 'Url input field',
  component: (
    <Form__fieldset>
      <List variant="ordered">
        <List__item>
          <Form__label htmlFor="url-field">URL field</Form__label>
          <Form__input id="url-field" type="url" placeholder="http://example.com" autocomplete="off" />
        </List__item>
      </List>
    </Form__fieldset>
  )
}, {
  name: 'Password input field',
  component: (
    <Form__fieldset>
      <List variant="ordered">
        <List__item>
          <Form__label htmlFor="password-field">Password field</Form__label>
          <Form__input id="password-field" type="password" />
        </List__item>
      </List>
    </Form__fieldset>
  )
}, {
  name: 'Textarea field',
  component: (
    <Form__fieldset>
      <List variant="ordered">
        <List__item>
          <Form__label htmlFor="textarea-field">Textarea field</Form__label>
          <Form__textarea id="textarea-field" cols="32" rows="8" />
        </List__item>
      </List>
    </Form__fieldset>
  )
}, {
  name: 'Date input field',
  component: (
    <Form__fieldset>
      <List variant="ordered">
        <List__item>
          <Form__label htmlFor="date-field">Date field</Form__label>
          <Form__input id="date-field" type="date" />
        </List__item>
      </List>
    </Form__fieldset>
  )
}, {
  name: 'Select field',
  component: (
    <Form__fieldset>
      <List variant="ordered">
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
      </List>
    </Form__fieldset>
  )
}, {
  name: 'Radio buttons',
  component: (
    <Form__fieldset>
      <List variant="ordered">
        <List__item>
          <Form__inputOptionSet
            id="radio-option"
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
      </List>
    </Form__fieldset>
  )

}, {
  name: 'Checkboxes',
  component: (
    <Form__fieldset>
      <List variant="ordered">
        <List__item>
          <Form__inputOptionSet
            id="checkbox-option"
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
      </List>
    </Form__fieldset>
  )
}, {
  name: 'Color input field',
  component: (
    <Form__fieldset>
      <List variant="ordered">
        <List__item>
          <Form__label htmlFor="color-type">Color field</Form__label>
          <Form__input id="color-type" type="color" />
        </List__item>
      </List>
    </Form__fieldset>
  )
}, {
  name: 'File input field',
  component: (
    <Form__fieldset>
      <List variant="ordered">
        <List__item>
          <Form__label htmlFor="file-field" className="Form__input--upload">
            Upload file field / button
            <Form__input id="file-field" type="file" />
          </Form__label>
        </List__item>
      </List>
    </Form__fieldset>
  )
}, {
  name: 'Range input field',
  component: (
    <Form__fieldset>
      <List variant="ordered">
        <List__item>
          <Form__label htmlFor="range-type">Range type</Form__label>
          <Form__input id="range-type" type="range" />
        </List__item>
      </List>
    </Form__fieldset>
  )
}, {
  name: 'Form template',
  component: (
    <Form>
      <p>Fields marked with a * are <strong id="required">required</strong>.</p>
      <Form__fieldset>
        <Form__legend>Form legend</Form__legend>
        <List variant="ordered">
          <List__item>
            <Form__label htmlFor="error-field">Error message <b role="presentation" className="required">*</b></Form__label>
            <Form__input id="error-field" className="input-error" required aria-required="true" aria-describedby="error-field--error" />
            <span id="error-field--error" className="input-error--message error--hidden active" role="alert">Example of field-level error message.</span>
          </List__item>
          <List__item>
            <Form__label htmlFor="success-field">Success message <b role="presentation" className="required">*</b></Form__label>
            <Form__input id="success-field" className="input-success" required aria-required="true" aria-describedby="success-field--success" />
            <span id="success-field--success" className="input-success--message success--hidden active" aria-live="polite">Example of field-level success message.</span>
          </List__item>
          <List__item>
            <Form__label htmlFor="note-field">Note message <b role="presentation" className="required">*</b></Form__label>
            <Form__input id="note-field" required aria-required="true" aria-describedby="note-field--success" />
            <span id="note-field--success" className="note note--hidden active" aria-live="polite">Example of field-level note message.</span>
          </List__item>
          <List__item>
            <Form__label htmlFor="text-field">Text field</Form__label>
            <Form__input id="text-field" />
          </List__item>
          <List__item>
            <Form__label htmlFor="email-field">Email field</Form__label>
            <Form__input id="email-field" type="email" placeholder="you@example.com" />
          </List__item>
          <List__item>
            <Form__label htmlFor="search-field">Search field</Form__label>
            <Form__input id="search-field" type="search" />
          </List__item>
          <List__item>
            <Form__label htmlFor="url-field">URL field</Form__label>
            <Form__input id="url-field" type="url" placeholder="http://example.com" autocomplete="off" />
          </List__item>
          <List__item>
            <Form__label htmlFor="password-field">Password field</Form__label>
            <Form__input id="password-field" type="password" />
          </List__item>
          <List__item>
            <Form__label htmlFor="date-field">Date field</Form__label>
            <Form__input id="date-field" type="date" />
          </List__item>
          <List__item>
            <Form__label htmlFor="textarea-field">Textarea field</Form__label>
            <Form__textarea id="textarea-field" cols="32" rows="8" />
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
              id="radio-option"
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
              id="checkbox-option"
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
        </List>
      </Form__fieldset>
    </Form>
  )
}];
