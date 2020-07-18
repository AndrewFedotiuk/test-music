import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';

export const composeEnhancers = composeWithDevTools({
	// Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

export const searchAll = 'https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=';
export const searchSingle = 'https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=';

const store = createStore(rootReducer,
	composeEnhancers(
		applyMiddleware(
			ReduxThunk.withExtraArgument({ searchAll, searchSingle }),
		),
	));

export default store;
