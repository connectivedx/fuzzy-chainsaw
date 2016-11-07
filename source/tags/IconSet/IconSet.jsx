import React from 'react';
import styles from './IconSet.css';

const getName = name =>
	name.substr(0, name.length - '.svg'.length).substr(2);

const svgsContext = require.context("!!svg-as-symbol!./assets", true, /^\.\/.*\.svg$/);
const svgsKeys = svgsContext.keys();
const svgs = svgsKeys.map((key, i) => {
	return svgsContext(key)
});

export default () => {
	const symbols = svgs.map((svg, i) => {
		const name = getName(svgsKeys[i]);
		return svg.replace('<symbol', `<symbol id="${name}" preserveAspectRatio="xMidYMid slice"`); // replace id
	});

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="icon-set"
			dangerouslySetInnerHTML={{ __html: symbols.join('') }} />
	)
}
