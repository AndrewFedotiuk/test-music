import React from 'react';
import avatar from '../../assets/images/User.png';

import './index.scss';

const AvatarGroup = () => (
	<div className='avatar-group'>
		<img className='avatar' src={avatar} alt='Musician' />
		<p className='title'>Ignored</p>
		<p className='name'>Jazz B</p>
	</div>
);

export default AvatarGroup;
