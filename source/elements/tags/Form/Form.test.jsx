import test from 'tape';
import { shallow } from 'enzyme';

import {
  Form,
  Form__fieldset,
  Form__legend,
  Form__label,
  Form__input
} from './Form';

test('<Form>', (t) => {
  const component = shallow(<Form>Hello World</Form>);
  t.ok(component.is('.Form'), 'tag class');
  t.ok(component.is('form'), 'tag name');
  t.end();
});

test('<Form__fieldset>', (t) => {
  const component = shallow(<Form__fieldset>Hello World</Form__fieldset>);
  t.ok(component.is('fieldset'), 'tag name');
  t.ok(component.is('.Form__fieldset'), 'tag class');
  t.end();
});

test('<Form__legend>', (t) => {
  const component = shallow(<Form__legend>Hello World</Form__legend>);
  t.ok(component.is('legend'), 'tag name');
  t.end();
});

test('<Form__label>', (t) => {
  const component = shallow(<Form__label>Hello World</Form__label>);
  t.ok(component.is('label'), 'tag name');
  t.end();
});

test('<Form__input>', (t) => {
  const component = shallow(<Form__input>Hello World</Form__input>);
  t.ok(component.is('input'), 'tag name');
  t.ok(component.is('.Form__input'), 'tag class');
  t.end();
});

test('<Form__input>', (t) => {
  const component = shallow(<Form__input>Hello World</Form__input>);
  t.ok(component.is('input'), 'tag name');
  t.ok(component.is('.Form__input'), 'tag class');
  t.end();
});

