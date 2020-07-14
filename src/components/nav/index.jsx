import React from 'react';
import propTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import SvgHandler from '../svg-handler';

import './index.scss';

const Nav = ({ title, items, classes }) => {
	const classNames = ['nav', ...classes];

	return (
		<ul className={classNames.join(' ')}>
			{title && <p className='error'>{title}</p>}

			{
				items.map((item) => (
					<li key={item.text}>
						<NavLink to={item.link ? item.link : 'blank'} activeClassName='active' className={item.link ? '' : 'disabled'}>
							{item.icon && <SvgHandler iconId={item.icon} />}
							<span>{item.text}</span>
						</NavLink>
					</li>
				))
			}
		</ul>
	);
};

Nav.defaultProps = {
	title: null,
	classes: [],
};

Nav.propTypes = {
	title: propTypes.string,
	items: propTypes.arrayOf(propTypes.object).isRequired,
	classes: propTypes.arrayOf(propTypes.string),
};

export default Nav;
