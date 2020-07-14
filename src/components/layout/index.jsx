import React from 'react';
import propTypes from 'prop-types';
import SideBur from '../side-bur';

import './index.scss';

export default function Layout({ children }) {
	return (
		<>
			<div className='base-layout'>
				<SideBur />
				<div className='main'>
					<div className='header'>header</div>
					{children}
					<div className='footer'>footer</div>
				</div>
			</div>

			<footer>footer</footer>
		</>
	);
}

Layout.propTypes = {
	children: propTypes.element.isRequired,
};
