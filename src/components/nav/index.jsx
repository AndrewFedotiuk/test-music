import React from 'react';
import propTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import SvgHandler from '../svg-handler';

import './index.scss';

const Nav = ({ title, items }) => (
	<ul className='nav'>
		{title && <p className='nav-title error'>{title}</p>}

		{
			items.map((item) => (
				<li key={item.text}>
					<NavLink to={item.link ? item.link : 'blank'} activeClassName='active'>
						{item.icon && <SvgHandler iconId={item.icon} />}
						<span>{item.text}</span>
					</NavLink>
				</li>
			))
		}
	</ul>
);

Nav.defaultProps = {
	title: null,
};

Nav.propTypes = {
	title: propTypes.string,
	items: propTypes.arrayOf(propTypes.object).isRequired,
};

export default Nav;
