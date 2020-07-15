import React from 'react';
import SvgHandler from '../svg-handler/index';

import './index.scss';

const HeaderForm = () => (
	<form className='header-form'>
		<SvgHandler iconId='searchIcon' />
		<input type='text' placeholder='Search for songs, artists etc ...' maxLength='50' />
	</form>
);

export default HeaderForm;
