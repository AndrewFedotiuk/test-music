import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { searchSinglePerson } from '../../store/reducers/actions';
import DetailsWrapper from './details-wrapper/index';
import TracksSection from './tracks-section/index';
import { useSearchParamsFromURL } from '../../custom-hooks';

import '../main-page.scss';
import './index.scss';

const Browse = () => {
	const { selectedPerson } = useSelector(({ search }) => search);
	const dispatch = useDispatch();
	const currentId = useSearchParamsFromURL();
	const location = useLocation();

	useEffect(() => {
		if (currentId && (selectedPerson?.idPlayer !== currentId)) {
			dispatch(searchSinglePerson(currentId));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location]);

	return selectedPerson ? (
		<div className='page browse-page'>
			<TracksSection selectedPerson={selectedPerson} />
			<DetailsWrapper selectedPerson={selectedPerson} />
		</div>
	)
		: <h2>Pls type some text to search!</h2>;
};

export default Browse;
