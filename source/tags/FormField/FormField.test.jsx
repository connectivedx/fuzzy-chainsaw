import React from 'react';
import {FormField, FormField_Label, FormField_Control, FormField_Error} from './FormField.jsx';
import FormLabel from '../FormLabel/FormLabel.jsx';
import FormInput from '../FormInput/FormInput.jsx';

export default [{
	name: "default",
	component: (
		<FormField>
			<FormField_Label>
				<FormLabel>Label</FormLabel>
			</FormField_Label>
			<FormField_Control>
				<FormInput />
			</FormField_Control>
			<FormField_Error>
				<FormLabel variant="error">Error</FormLabel>
			</FormField_Error>
		</FormField>
	),
	test(t, component) {
		t.equal(component.is('div'), true, 'tag name');
		t.equal(component.is('.form-field'), true, 'tag class');
		// t.equal(component.text(), 'Hello World', 'text');
		t.end();
	}
}];
