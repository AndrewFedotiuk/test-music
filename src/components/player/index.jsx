import React from 'react';
import avatar from '../../assets/images/User.png';
import SvgHandler from '../svg-handler';

import './index.scss';

const Player = () => (
	<footer className='player'>
		<div className='d-flex avatar-wrapper'>
			<img className='avatar' src={avatar} alt='Avatar' />
			<div className='text-wrapper'>
				<p className='title'>Say So</p>
				<p className='caption'>Doja Cat</p>
			</div>
		</div>

		<div className='d-flex play-buttons-wrapper'>
			<SvgHandler iconId='arrowLeftIcon' />
			<div className='pause-wrapper'>
				<SvgHandler iconId='pauseIcon' />
			</div>
			<SvgHandler iconId='arrowLeftIcon' />
		</div>

		<div className='d-flex range-wrapper'>
			<span>1:22</span>
			<div className='input-wrapper'>
				<input type='range' min='0' max='1' step='.05' value='.4' />
			</div>
			<span>4:38</span>
		</div>

		<div className='d-flex controls-wrapper'>
			<SvgHandler iconId='muteIcon' />
			<SvgHandler iconId='repeatIcon' />
		</div>
	</footer>
);

export default Player;
