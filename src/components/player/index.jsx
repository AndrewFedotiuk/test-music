import React from 'react';
import avatar from '../../assets/images/User.png';
import SvgHandler from '../svg-handler';

import './index.scss';
import Button from '../button/index';

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

		<div className='d-flex range-wrapper'>
			<span>1:22</span>
			<div className='input-wrapper'>
				<div className='filled-range' style={{ width: '40%' }} />
				<input readOnly type='range' min='0' max='1' step='.05' value='.4' />
			</div>
			<span>4:38</span>
		</div>

		<div className='d-flex controls-wrapper'>
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
