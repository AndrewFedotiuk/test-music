import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchSinglePerson } from '../../store/reducers/actions';
import DetailsWrapper from './details-wrapper/index';
import TracksSection from './tracks-section/index';
import { useSearchParamsFromURL } from './helpers';

import '../main-page.scss';
import './index.scss';

const Browse = React.memo(() => {
	const { selectedPerson } = useSelector(({ search }) => search);
	const dispatch = useDispatch();
	const currentId = useSearchParamsFromURL();

	useEffect(() => {
		if (!selectedPerson && currentId) {
			console.log(currentId);
			dispatch(searchSinglePerson(currentId));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='page browse-page'>
			{
				selectedPerson ? (
					<>
						<TracksSection selectedPerson={selectedPerson} />
						<DetailsWrapper selectedPerson={selectedPerson} />
					</>
				)
					: <h2>Pls type some text to search!</h2>
			}
		</div>
	);
});

export default Browse;
