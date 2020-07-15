import React from 'react';
import SvgHandler from '../svg-handler/index';

import './index.scss';

const HeaderForm = () => (
	<form className='header-form'>
		<label htmlFor='headerFormInput'>
			<SvgHandler iconId='searchIcon' />
			<input id='headerFormInput' type='text' placeholder='Search for songs, artists etc ...' maxLength='50' />
		</label>
	</form>
);

export default HeaderForm;
