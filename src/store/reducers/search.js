import types from './action-types';

const initialState = {
	loading: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.LOADING_STARTED:
			return {
				...state,
				loading: false,
			};
		case types.LOADING:
			return {
				...state,
				loading: true,
				searchWord: action.payload,
			};
		default:
			return state;
	}
};
