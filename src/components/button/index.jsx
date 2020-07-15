import React from 'react';
import propTypes from 'prop-types';
import SvgHandler from '../svg-handler/index';

import './index.scss';

const Button = ({ children, icon, classes }) => {
	const classNames = ['btn', ...classes];
	return (
		<button type='button' className={classNames.join(' ')}>
			{icon && <SvgHandler iconId={icon} />}
			{children && <span>{children}</span>}
		</button>
	);
};

Button.defaultProps = {
	children: null,
	icon: null,
	classes: ['btn-base'],
};

Button.propTypes = {
	children: propTypes.oneOfType([
		propTypes.string,
		propTypes.element,
		propTypes.node,
	]),
	icon: propTypes.string,
	classes: propTypes.arrayOf(propTypes.string),
};

export default Button;
