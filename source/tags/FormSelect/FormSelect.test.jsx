import React from 'react';
import {FormSelect, FormSelectField} from './FormSelect.jsx';

let options = [{
				label: 'normal optgroup',
				options: [
					{label: 'chicken', value: 'chicken'},
					{label: 'poohbah', value: 'poohbah'}
				]
			},{
				label: 'disabled optgroup',
				disabled: 'disabled',
				options: [
					{label: 'vasaline', value: 'vasaline'},
					{label: 'cookie', value: 'cookie'}
				]
			},
			{
				label: 'banana',
				value: 'banana'
			},{
				label: 'monkey',
				value: 'monkey',
				disabled: 'disabled'
			}];

export default [{
	name: "default",
	component: (
		<FormSelect value="banana" options={options} />
	),
	test(t, component) {
		t.equal(component.is('div'), true, 'tag name');
		t.equal(component.is('.form-select'), true, 'tag class');
		t.end();
	}
},{
	name: "default field",
	component: (
		<FormSelectField value="banana" options={options} labelText="Choose one" />
	),
	test(t, component) {
		// t.equal(component.is('div'), true, 'tag name');
		// t.equal(component.is('.form-field--select-default'), true, 'tag class');
		t.end();
	}
},{
	name: "multiple",
	component: (
		<FormSelect value="banana" variant="multiple" options={options} />
	),
	test(t, component) {
		t.equal(component.is('div'), true, 'tag name');
		t.equal(component.is('.form-select'), true, 'tag class');
		t.end();
	}
},{
	name: "multiple field",
	component: (
		<FormSelectField value="banana" variant="multiple" options={options} labelText="Choose one or more" />
	),
	test(t, component) {
		// t.equal(component.is('div'), true, 'tag name');
		// t.equal(component.is('.form-field--select-multiple'), true, 'tag class');
		t.end();
	}
}];
