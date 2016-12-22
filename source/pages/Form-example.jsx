import React from 'react';

import Skeleton from '../tags/Skeleton/Skeleton';
import Heading from '../tags/Heading/Heading';
import Rhythm from '../tags/Rhythm/Rhythm';
import Wrapper from '../tags/Wrapper/Wrapper';
import Button from '../tags/Button/Button';
import Form from '../tags/Form/Form';
import {FormInputField} from '../tags/FormInput/FormInput';
import FormFieldset from '../tags/FormFieldset/FormFieldset';
import FormLabel from '../tags/FormLabel/FormLabel';
import FormCheckgroup from '../tags/FormCheckgroup/FormCheckgroup';
import {
  getTagsIndexData,
  getComponentsIndexData,
  getPagesIndexData,
  Index
} from '../styleguide/components/Index';

export default ({ locals }) => (
	<Skeleton title="Form Example">
		<Wrapper>
			<Rhythm size="large">
				<Heading level="1">An Example Form</Heading>
        <Form action="#">
        <Rhythm>
          <FormFieldset legendText="Tell us about yourself" legendWeight="2">
                <FormInputField labelText="First Name" />
                <FormInputField labelText="Last Name" />
                <FormInputField labelText="Birthdate" />
          </FormFieldset>
          <FormFieldset legendText="Help us get in touch" legendWeight="2">
                <FormInputField type="tel" labelText="Telephone Number" />
                <FormInputField type="email" labelText="Email Address" />
                <FormCheckgroup
                  legendText="Check all that apply"
                  checks={[
                      {
                        label: 'Bananas',
                        value: 'marsupial'
                      },{
                        label: 'Darth Vadar',
                        value: 'gear-shaft'
                      },{
                        label: 'Sticks',
                        value: 'memory-foam'
                      }
                    ]}
                />
          </FormFieldset>
          <Button>Send!</Button>
          </Rhythm>
        </Form>
			</Rhythm>
		</Wrapper>
	</Skeleton>
)
