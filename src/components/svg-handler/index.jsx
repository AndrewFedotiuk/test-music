import React from 'react';
import propTypes from 'prop-types';

import './index.scss';

const SvgHandler = ({ iconId, classes }) => {
	const classNames = ['base-icon', ...classes];

	return (
		<svg className={classNames.join(' ')} aria-hidden='true' role='img'>
			<use href={`#${iconId}`} />
		</svg>
	);
};

SvgHandler.defaultProps = {
	classes: [],
};

SvgHandler.propTypes = {
	iconId: propTypes.string.isRequired,
	classes: propTypes.arrayOf(propTypes.string),
};

export default SvgHandler;
