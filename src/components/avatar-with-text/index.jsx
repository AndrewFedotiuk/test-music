import React from 'react';
import propTypes from 'prop-types';
import avatar from '../../assets/images/User.png';

import './index.scss';

const AvatarWithText = ({ classes }) => {
	const classNames = ['avatar-wrapper', ...classes];

	return (
		<div className={classNames.join(' ')}>
			<img className='avatar-wrapper-avatar' src={avatar} alt='Avatar' />
			<div className='avatar-wrapper-text-wrapper'>
				<p className='avatar-wrapper-title'>Say So</p>
				<p className='avatar-wrapper-caption'>Doja Cat</p>
			</div>
		</div>
	);
};

AvatarWithText.defaultProps = {
	classes: [],
};

AvatarWithText.propTypes = {
	classes: propTypes.arrayOf(propTypes.string),
};

export default AvatarWithText;
