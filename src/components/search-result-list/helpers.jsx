import React from 'react';

export default function sortEqual(str, searchWord) {
	const textArr = str.split(new RegExp(`(${searchWord})`, 'igm'));

	return (
		<p className='text'>
			{
				textArr.map((text, index) => (
					// eslint-disable-next-line react/no-array-index-key
					<span className={index % 2 ? 'error' : ''} key={index}>
						{text}
					</span>
				))
			}
		</p>
	);
}
