import React from 'react';
import propTypes from 'prop-types';
import SideBur from '../side-bur';
import Player from '../player';
import Header from '../header/index';

import './index.scss';

export default function Layout({ children }) {
	return (
		<>
			<div className='base-layout'>
				<SideBur />
				<div className='main'>
					<Header />
					{children}
				</div>
			</div>

			<Player />
		</>
	);
}

Layout.propTypes = {
	children: propTypes.element.isRequired,
};
