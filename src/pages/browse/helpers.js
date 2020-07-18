import { useLocation } from 'react-router-dom';

// eslint-disable-next-line import/prefer-default-export
export const useSearchParamsFromURL = (key = 'personId') => new URLSearchParams(
	useLocation().search,
).get(key).toString();
