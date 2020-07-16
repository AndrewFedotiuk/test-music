import React from 'react';
import propTypes from 'prop-types';
import SvgHandler from '../svg-handler/index';

import './index.scss';

const sortEqual = (str, searchWord) => {
	const equalIndex = str.toLowerCase().indexOf(searchWord.toLowerCase());

	if (equalIndex !== -1 && str.toLowerCase().includes(searchWord.toLowerCase())) {
		const prefix = str.substring(0, equalIndex);
		const middle = str.substring(equalIndex, equalIndex + searchWord.length);
		const suffix = str.substring(equalIndex + searchWord.length);

		return (
			<p className='text'>
				{prefix && <span className='postfix'>{prefix}</span>}
				{middle && <span className='error'>{middle}</span>}
				{suffix && <span className='postfix'>{suffix}</span>}
			</p>
		);
	}

	return (
		<p className='text'>
			<span className='postfix'>{str}</span>
		</p>
	);
};

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

					{
						sortEqual(person.strPlayer, searchWord)
					}
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
