import types from './action-types';

const initialState = {
	searchWord: null,
	searchResult: [],
	error: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.SAVE_SEARCH_VALUE:
			return {
				...state,
				searchWord: action.payload,
			};
		case types.SET_ERROR:
			return {
				...state,
				error: action.payload,
			};
		case types.SET_SEARCH_RESULT:
			return {
				...state,
				searchResult: action.payload,
			};
		default:
			return state;
	}
};
