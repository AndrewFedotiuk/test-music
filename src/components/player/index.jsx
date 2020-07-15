import React from 'react';
import SvgHandler from '../svg-handler';
import AvatarWithText from '../avatar-with-text/index';
import Button from '../button/index';

import './index.scss';

const Player = () => (
	<footer className='player'>
		<AvatarWithText />

		<div className='d-flex player-play-buttons-wrapper'>
			<Button>
				<SvgHandler iconId='arrowLeftIcon' />
			</Button>
			<Button classes={['pause-wrapper']}>
				<SvgHandler iconId='pauseIcon' />
			</Button>
			<Button classes={['invert']}>
				<SvgHandler iconId='arrowLeftIcon' />
			</Button>
		</div>

		<div className='d-flex player-range-wrapper'>
			<span>1:22</span>
			<div className='input-wrapper'>
				<div className='filled-range' style={{ width: '40%' }} />
				<input readOnly type='range' min='0' max='1' step='.05' value='.4' />
			</div>
			<span>4:38</span>
		</div>

		<div className='d-flex player-controls-wrapper'>
			<Button>
				<SvgHandler iconId='volumeIcon' />
			</Button>

			<Button>
				<SvgHandler iconId='repeatIcon' />
			</Button>
		</div>
	</footer>
);

export default Player;
