import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

function useOutside(ref, callback) {
	useEffect(() => {
		function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target)) callback();
		}

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, [ref, callback]);
}

export default function ClickOutside({ children, callback }) {
	const wrapperRef = useRef(null);
	useOutside(wrapperRef, callback);

	return <div ref={wrapperRef}>{children}</div>;
}

ClickOutside.propTypes = {
	children: PropTypes.element.isRequired,
	callback: PropTypes.func.isRequired,
};
