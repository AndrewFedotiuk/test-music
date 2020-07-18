import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

function useOutsideClick(ref, callback) {
	useEffect(() => {
		function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target)) callback();
		}

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, [ref, callback]);
}

export default function ClickOutside({ children, callback, className }) {
	const wrapperRef = useRef(null);
	useOutsideClick(wrapperRef, callback);

	return <div ref={wrapperRef} className={className}>{children}</div>;
}

ClickOutside.defaultProps = {
	className: '',
};

ClickOutside.propTypes = {
	children: PropTypes.element.isRequired,
	callback: PropTypes.func.isRequired,
	className: PropTypes.string,
};
