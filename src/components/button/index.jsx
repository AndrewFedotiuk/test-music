import React from 'react';
import propTypes from 'prop-types';
import SvgHandler from '../svg-handler/index';

import './index.scss';

const Button = ({ children, icon }) => {
	const classes = children && 'has-border';
	return (
		<button type='button' className={`btn ${classes}`}>
			{icon && <SvgHandler iconId={icon} />}
			{children && <span>{children}</span>}
		</button>
	);
};

Button.defaultProps = {
	children: null,
	icon: null,
};

Button.propTypes = {
	children: propTypes.string,
	icon: propTypes.string,
};

export default Button;
