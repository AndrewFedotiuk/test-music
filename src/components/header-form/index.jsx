import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash/debounce';
import SvgHandler from '../svg-handler';
import SearchResultList from '../search-result-list';
import { searchAllPersons } from '../../store/reducers/actions';
import ClickOutside from '../../click-outside';

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

	// eslint-disable-next-line
	const debouncedSetValue = useCallback(debounce((value) => dispatch(searchAllPersons(value)), 500), []);

	function changeHandler({ target }) {
		setState({
			...state,
			inputValue: target.value,
			showList: true,
		});

		debouncedSetValue(target.value);
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
		<ClickOutside callback={leaveHandler}>
			<form className='header-form' onSubmit={submitForm}>
				<label className='header-form-input-label' htmlFor='headerFormInput'>
					<SvgHandler iconId='searchIcon' />
					<input
						onChange={changeHandler}
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
						? (
							<SearchResultList
								searchResult={searchResult}
								searchWord={searchWord}
								closePopup={leaveHandler}
							/>
						)
						: null
				}
			</form>
		</ClickOutside>

	);
};

export default HeaderForm;
