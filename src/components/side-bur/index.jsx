import React from 'react';
import SvgHandler from '../svg-handler';
import Nav from '../nav';

import './index.scss';

const SideBur = () => {
	const navItems1 = [
		{
			link: '/',
			icon: 'homeIcon',
			text: 'home',
		},
		{
			link: 'search',
			icon: 'searchIcon',
			text: 'browse',
		},
		{
			icon: 'radioIcon',
			text: 'radio',
		},
	];

	const navItems2 = [
		{
			icon: 'clockIcon',
			text: 'RECENTLY PLAYED',
		},
		{
			icon: 'heartIcon',
			text: 'FAVORITE SONGS',
		},
		{
			icon: 'userIcon',
			text: 'ARTISTS',
		},
		{
			icon: 'layersIcon',
			text: 'ALBUMS',
		},
	];

	const navItems3 = [
		{
			text: 'TOP POP',
		},
		{
			text: 'CHARTING NOW',
		},
		{
			text: 'ROMANCE SEASON',
		},
	];

	return (
		<aside className='side-bur'>
			<SvgHandler iconId='logoIcon' classes={['logo']} />

			<Nav items={navItems1} />
			<Nav title='YOUR LIBRARY' items={navItems2} />
			<Nav title='PLAYLISTS' items={navItems3} />
		</aside>
	);
};

export default SideBur;
