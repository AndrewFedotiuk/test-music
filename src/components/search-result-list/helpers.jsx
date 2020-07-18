import React from 'react';

export default function sortEqual(str, searchWord) {
	const textArr = str.split(new RegExp(`(${searchWord})`, 'igm'));

	return (
		<p className='text'>
			{
				textArr.map((text, index) => (
					<span className={index % 2 ? 'error' : ''}>
						{text}
					</span>
				))
			}
		</p>
	);
}
