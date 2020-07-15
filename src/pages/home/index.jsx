import React from 'react';
import banner from '../../assets/images/MUSIC.png';
import AvatarWithText from '../../components/avatar-with-text';

import '../main-page.scss';
import './index.scss';

export const Home = () => (
	<div className='page home-page'>
		<div className='banner-wrapper'>
			<img className='banner' src={banner} alt='banner' />
		</div>

		<section>
			<h3>Featured</h3>
			<p className='caption'>this week</p>
			<div className='gradient-wrapper'>
				<ul className='chosen-wrapper'>
					{new Array(7).fill('').map(() => <li key={Math.random()}><AvatarWithText classes={['vertical']} /></li>)}
				</ul>
				<div className='gradient-overlay' />
			</div>
		</section>

	</div>
);

export default Home;
