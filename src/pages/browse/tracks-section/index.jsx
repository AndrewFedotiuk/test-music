import React from 'react';
import propTypes from 'prop-types';
import Button from '../../../components/button/index';
import SvgHandler from '../../../components/svg-handler/index';
import AvatarWithText from '../../../components/avatar-with-text/index';

import './index.scss';

const TracksSection = ({ selectedPerson }) => (
	<section className='tracks-section'>
		<div className='h2-wrapper'>
			<h2>Most Loved Tracks</h2>

			<Button>
				<SvgHandler iconId='moreHorizontalIcon' />
			</Button>
		</div>

		<div className='track-wrapper'>
			<div className='track'>
				<AvatarWithText />
				<div className='duration-wrapper browse-page-hide-on-mobile'>
					<span>4:22</span>
					<Button>
						<SvgHandler iconId='plusCircleIcon' />
					</Button>
				</div>
			</div>
		</div>

		<div className='temporary-block'>
			<h4>{selectedPerson.strTeam}</h4>
			<h4>{selectedPerson.strBirthLocation}</h4>
			<h4>{selectedPerson.strDescriptionEN}</h4>
		</div>
	</section>
);

TracksSection.propTypes = {
	selectedPerson: propTypes.objectOf(propTypes.string).isRequired,
};

export default TracksSection;
