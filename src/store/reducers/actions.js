import types from './action-types';

export const saveSearchValue = (searchWord) => ({
	type: types.SAVE_SEARCH_VALUE,
	payload: searchWord,
});

export const setSearchResult = (result) => ({
	type: types.SET_SEARCH_RESULT,
	payload: result,
});

export const setError = (error) => ({
	type: types.SET_ERROR,
	payload: error,
});

export const setPerson = (person) => ({
	type: types.SET_PERSON,
	payload: person,
});

export const searchAllPersons = (word) => async (dispatch, getState, { searchAll }) => {
	dispatch(saveSearchValue(word));

	return fetch(encodeURI(searchAll.concat(word)))
		.then((response) => response.json())
		.then((data) => dispatch(setSearchResult(data.player)))
		.catch((error) => {
			dispatch(setError(`Server error - ${error}`));
			console.log(`Server error - ${error}`);
		});
};

export const searchSinglePerson = (word) => async (dispatch, getState, { searchSingle }) => fetch(
	encodeURI(searchSingle.concat(word)),
)
	.then((response) => response.json())
	.then((data) => dispatch(setPerson(data.players[0])))
	.catch((error) => {
		dispatch(setError(`Server error - ${error}`));
		console.log(`Server error - ${error}`);
	});
