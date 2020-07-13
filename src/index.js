import React from "react";
import { render } from "react-dom";
import App from "./App";
import store from './store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './styles/normalize.css';
import './styles/index.scss';


var mountNode = document.getElementById("app");
render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
	, mountNode);
