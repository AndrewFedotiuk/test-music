import React from 'react';
import propTypes from 'prop-types';
import Button from '../../../components/button/index';
import SvgHandler from '../../../components/svg-handler/index';
import AvatarWithText from '../../../components/avatar-with-text/index';

import './index.scss';

const DetailsWrapper = ({ selectedPerson }) => (
	<section className='details-wrapper'>
		<h2>{selectedPerson.strPlayer}</h2>
		<div className='image-wrapper'>
			{selectedPerson.strThumb && <img src={selectedPerson.strThumb} alt='musician' />}
		</div>

		<div className='browse-page-hide-on-mobile albums-wrapper'>
			<div className='h3-wrapper'>
				<div className='wrapper'>
					<h3>Albums</h3>

					<Button>
						<SvgHandler iconId='arrowLeftIcon' />
					</Button>

					<Button classes={['invert']}>
						<SvgHandler iconId='arrowLeftIcon' />
					</Button>
				</div>

				<Button classes={['details-wrapper-btn']}>
					<SvgHandler iconId='moreHorizontalIcon' />
				</Button>
			</div>
			<div className='gradient-wrapper'>
				<ul className='chosen-wrapper'>
					{new Array(7).fill('').map(() => <li key={Math.random()}><AvatarWithText classes={['vertical']} /></li>)}
				</ul>
				<div className='gradient-overlay' />
			</div>
		</div>

	</section>
);

DetailsWrapper.defaultProps = {
	selectedPerson: {},
};

DetailsWrapper.propTypes = {
	selectedPerson: propTypes.objectOf(propTypes.string),
};

export default DetailsWrapper;
