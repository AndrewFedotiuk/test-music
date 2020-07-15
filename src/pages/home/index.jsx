import React from 'react';
import banner from '../../assets/images/MUSIC.png';
import AvatarGroup from '../../components/avatar-group/index';

import './index.scss';

export const Home = () => (
	<div className='home-page'>
		<div className='banner-wrapper'>
			<img className='banner' src={banner} alt='banner' />
		</div>

		<section className='featured'>
			<h3>Featured</h3>
			<p className='caption'>this week</p>
			<div className='gradient-wrapper'>
				<ul className='chosen-wrapper'>
					{new Array(7).fill('').map(() => <li><AvatarGroup key={Math.random()} /></li>)}
				</ul>
				<div className='gradient-overlay' />
			</div>
		</section>

	</div>
);

export default Home;
