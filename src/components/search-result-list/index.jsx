import React from 'react';
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import SvgHandler from '../svg-handler/index';
import selectEqual from './helpers';
import { setPerson } from '../../store/reducers/actions';

import './index.scss';

const SearchResultList = React.memo(({ searchResult, searchWord, closePopup }) => {
	const dispatch = useDispatch();
	function goToHandler(person) {
		dispatch(setPerson(person));
		closePopup();
	}

	return (
		<div className='search-result-list'>
			<ul>
				{
					searchResult.map((person) => (
						<li className='search-result-list-item' key={person.idPlayer}>
							<NavLink to={`./browse?personId=${person.idPlayer}`} onClick={() => goToHandler(person)}>
								{
									person.strThumb
										? <img src={person.strThumb} alt='Person thumbnails' />
										: <SvgHandler iconId='musicIcon' />
								}

								{selectEqual(person.strPlayer, searchWord)}
							</NavLink>

						</li>
					))
				}
			</ul>
		</div>
	);
});

SearchResultList.propTypes = {
	searchResult: propTypes.arrayOf(propTypes.object).isRequired,
	searchWord: propTypes.string.isRequired,
	closePopup: propTypes.func.isRequired,
};

export default SearchResultList;
