import React from 'react';
import SvgHandler from '../svg-handler/index';
import SearchResultList from '../search-result-list/index';

import './index.scss';

const HeaderForm = () => (
	<form className='header-form'>
		<label className='header-form-input-label' htmlFor='headerFormInput'>
			<SvgHandler iconId='searchIcon' />
			<input id='headerFormInput' className='error' type='text' autoComplete='off' placeholder='Search for songs, artists etc ...' maxLength='50' />
		</label>

		<SearchResultList />
	</form>
);

export default HeaderForm;
