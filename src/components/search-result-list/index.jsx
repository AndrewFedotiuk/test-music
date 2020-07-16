import React from 'react';
import propTypes from 'prop-types';
import SvgHandler from '../svg-handler/index';
import sortEqual from './helpers';

import './index.scss';

const SearchResultList = React.memo(({ searchResult, searchWord }) => (
	<ul className='search-result-list'>
		{
			searchResult.map((person) => (
				<li className='search-result-list-item' key={person.idPlayer}>
					{
						person.strThumb
							? <img src={person.strThumb} alt='Person thumbnails' />
							: <SvgHandler iconId='musicIcon' />
					}

					{sortEqual(person.strPlayer, searchWord)}
				</li>
			))
		}
	</ul>
));

SearchResultList.defaultProps = {
	searchResult: [],
};

SearchResultList.propTypes = {
	searchResult: propTypes.arrayOf(propTypes.object),
	searchWord: propTypes.string.isRequired,
};

export default SearchResultList;
