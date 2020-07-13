import React, { lazy, Suspense } from "react";
import { Switch, Route } from 'react-router';


const Home = lazy(() => import('./pages/home'));

export default () => {
	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<Switch>
					<Route
						exact
						path='/'
						render={() => <Home />}
					/>
				</Switch>
			</Suspense>
		</>
	);
}
