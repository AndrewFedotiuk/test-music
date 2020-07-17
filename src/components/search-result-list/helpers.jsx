import React from 'react';

export default function sortEqual(str, searchWord) {
	const [prefix, middle, suffix] = str.split(new RegExp(`(${searchWord})`, 'igm'));

	return (
		<p className='text'>
			{prefix && <span className='postfix'>{prefix}</span>}
			{middle && <span className='error'>{middle}</span>}
			{suffix && <span className='postfix'>{suffix}</span>}
		</p>
	);
}
