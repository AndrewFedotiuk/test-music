import React from 'react';
import propTypes from 'prop-types';
import SideBur from '../side-bur';
import Player from '../player';

import './index.scss';

export default function Layout({ children }) {
	return (
		<>
			<div className='base-layout'>
				<SideBur />
				<div className='main'>
					<div className='header'>header</div>
					{children}
					<footer className='footer'>footer</footer>
				</div>
			</div>

			<Player />
		</>
	);
}

Layout.propTypes = {
	children: propTypes.element.isRequired,
};
