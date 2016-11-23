import React from 'react';
import styles from './Wrapper.css';

const Wrapper = ({
	size = 'default',
	className = '',
	children
}) => {
	return (
		<div className={`wrapper wrapper--${size} ${className}`}>
			{children}
		</div>
	)
};

Wrapper.propTypes = {
	size: React.PropTypes.string,
	className: React.PropTypes.string
};

export default Wrapper;
