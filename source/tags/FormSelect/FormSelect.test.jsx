import React from 'react';
import FormSelect from './FormSelect.jsx';

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
	)/*,
	test(t, component) {
		t.equal(component.is('select'), true, 'tag name');
		t.equal(component.is('.form-select'), true, 'tag class');
		t.equal(component.text(), 'Hello World', 'text');
		t.end();
	}*/
},{
	name: "multiple",
	component: (
		<FormSelect value="banana" variant="multiple" options={options} />
	)/*,
	test(t, component) {
		t.equal(component.is('select'), true, 'tag name');
		t.equal(component.is('.form-select'), true, 'tag class');
		t.equal(component.text(), 'Hello World', 'text');
		t.end();
	}*/
}];
