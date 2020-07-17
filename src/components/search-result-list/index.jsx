import React from 'react';
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import SvgHandler from '../svg-handler/index';
import sortEqual from './helpers';
import { setPerson } from '../../store/reducers/actions';

import './index.scss';

const SearchResultList = React.memo(({ searchResult, searchWord, closePopup }) => {
	const dispatch = useDispatch();
	function goToHandler(person) {
		dispatch(setPerson(person));
		closePopup();
	}

	return (
		<ul className='search-result-list'>
			{
				searchResult.map((person) => (
					<li className='search-result-list-item' key={person.idPlayer}>
						<NavLink to={`./browse?${person.idPlayer}`} onClick={() => goToHandler(person)}>
							{
								person.strThumb
									? <img src={person.strThumb} alt='Person thumbnails' />
									: <SvgHandler iconId='musicIcon' />
							}

							{sortEqual(person.strPlayer, searchWord)}
						</NavLink>

					</li>
				))
			}
		</ul>
	);
});

SearchResultList.propTypes = {
	searchResult: propTypes.arrayOf(propTypes.object).isRequired,
	searchWord: propTypes.string.isRequired,
	closePopup: propTypes.func.isRequired,
};

export default SearchResultList;
