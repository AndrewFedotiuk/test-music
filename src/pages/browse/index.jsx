import React from 'react';
import Button from '../../components/button/index';
import SvgHandler from '../../components/svg-handler/index';
import AvatarWithText from '../../components/avatar-with-text/index';

import '../main-page.scss';
import './index.scss';

const Browse = () => (
	<div className='page browse-page'>
		<section className='tracks'>
			<div className='h2-wrapper'>
				<h2>Most Loved Tracks</h2>
			</div>

			<div className='track-wrapper'>
				<div className='track'>
					<AvatarWithText />
					<div className='duration-wrapper'>
						<span>4:22</span>
						<Button>
							<SvgHandler iconId='plusCircleIcon' />
						</Button>
					</div>
				</div>
			</div>
		</section>

		<section className='person'>
			<h2>The Prodigy</h2>
			<div className='image-wrapper'>
				<img src='https://edm.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2MzgwODY0MTMxODM1NTgz/the-prodigy.jpg' alt='musician' />
			</div>
			<div className='wrapper'>
				<h3>Albums</h3>
			</div>
			<div className='gradient-wrapper'>
				<ul className='chosen-wrapper'>
					{new Array(7).fill('').map(() => <li key={Math.random()}><AvatarWithText classes={['vertical']} /></li>)}
				</ul>
				<div className='gradient-overlay' />
			</div>
		</section>
	</div>
);

export default Browse;
