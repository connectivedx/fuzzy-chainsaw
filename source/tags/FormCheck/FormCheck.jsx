import React from 'react';
import styles from './FormCheck.css';
import uniqueid from 'lodash.uniqueid';
import Icon from '../Icon/Icon'
import IconCss from '../IconCss/IconCss'

export default ({
	className = '',
	type = 'checkbox',
	variant = 'cssIcons',
	id = uniqueid('form-check_'),
	name
}) => {
	let attrs = {id, name};
	let controlIcon = '';

	if (variant === 'svgIcons') {
		controlIcon = (
			<span className="form-check__icon form-check__icon--svg">
				<Icon name={type + "-unchecked"} />
				<Icon name={type + "-checked"} />
			</span>
		);
	}
	else if (variant === 'cssIcons') {
		controlIcon = ( <IconCss iconName={type} className="form-check__icon form-check__icon--css" /> );
	}

	return (
		<span className={`form-check form-check--${type} ${className}`}>
			<input type={type} className={"form-check__control form-check__control--" + type} {...attrs} />
			{controlIcon}
		</span>
	);
}
