import React from 'react';
import SvgHandler from '../svg-handler/index';

import './index.scss';

const SearchResultList = () => (
	<ul className='search-result-list'>
		<li className='search-result-list-item'>
			<SvgHandler iconId='musicIcon' />
			<p className='text'>
				<span className='error'>pro</span>
				<span className='postfix'>tadaa</span>
			</p>
		</li>
	</ul>
);

export default SearchResultList;
