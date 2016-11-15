import React from 'react';
import styles from './FormCheck.css';
import Icon from '../Icon/Icon'
import CssIcon from '../CssIcon/CssIcon'

export default ({
	className = '',
	type = 'checkbox',
	variant = 'cssIcons',
	id,
	name
}) => {
	let attrs = {id, name};
	let controlIcon = '';

	if (variant === 'svgIcons') {
		controlIcon = (
			<span className={"form-check__icon form-check__icon--svg form-check__icon--" + type}>
				<Icon name={type + "-unchecked"} />
				<Icon name={type + "-checked"} />
			</span>
		);
	}
	else if (variant === 'cssIcons') {
		controlIcon  =( <CssIcon iconName={type} className={"form-check__icon form-check__icon--css form-check__icon--" + type} /> );
	}

	return (
		<span className={`form-check form-check--${type} ${className}`}>
			<input type={type} className={"form-check__control form-check__control--" + type} {...attrs} />
			{controlIcon}
		</span>
	);
}
