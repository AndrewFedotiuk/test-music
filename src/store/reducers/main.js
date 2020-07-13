import {LOADING_STARTED, LOADING} from './action-types';

const initialState = {
	loading: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case LOADING_STARTED:
			return {
				...state,
				loading: false,
			};
		case LOADING:
			return {
				...state,
				loading: true,
				searchWord: action.payload,
			};
		default:
			return state;
	}
};
