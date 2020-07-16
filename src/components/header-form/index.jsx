import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SvgHandler from '../svg-handler/index';
import SearchResultList from '../search-result-list/index';
import { searchAllPersons } from '../../store/reducers/actions';

import './index.scss';

const HeaderForm = () => {
	const [state, setState] = useState({
		inputValue: '',
		showList: false,
	});

	const { searchResult, searchWord } = useSelector(({ search }) => search);

	const dispatch = useDispatch();

	function submitForm(e) {
		e.preventDefault();
	}

	function changeHandler({ target }) {
		setState({
			...state,
			inputValue: target.value,
			showList: true,
		});

		const trimmed = target.value.trim();

		if (trimmed) {
			dispatch(searchAllPersons());
		}
	}

	function leaveHandler() {
		setState({
			...state,
			showList: false,
		});
	}

	function focusHandler() {
		setState({
			...state,
			showList: true,
		});
	}

	return (
		<form className='header-form' onSubmit={submitForm}>
			<label className='header-form-input-label' htmlFor='headerFormInput'>
				<SvgHandler iconId='searchIcon' />
				<input
					onChange={changeHandler}
					onBlur={leaveHandler}
					onFocus={focusHandler}
					value={state.inputValue}
					id='headerFormInput'
					className='error'
					type='text'
					maxLength='50'
					autoComplete='off'
					placeholder='Search for songs, artists etc ...'
				/>
			</label>

			{
				searchResult?.length && state.showList
					? <SearchResultList searchResult={searchResult} searchWord={searchWord} />
					: null
			}
		</form>
	);
};

export default HeaderForm;
