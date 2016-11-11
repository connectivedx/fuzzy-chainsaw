import React from 'react';
import styles from './Rhythm.css';

const Rhythm = ({
	className = '',
	size = 'default',
	deep = false,
	children
}) => {
	const type = deep ? 'rhythm-deep' : 'rhythm';

	return (
		<div className={`${type} rhythm--${size} ${className}`}>
			{children}
		</div>
	)
};

Rhythm.propTypes = {
	size: React.PropTypes.string,
	deep: React.PropTypes.string,
	className: React.PropTypes.string
};

export default Rhythm;
