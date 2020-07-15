import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router';
import Layout from './components/layout';

const Home = lazy(() => import('./pages/home'));
const Browse = lazy(() => import('./pages/browse'));

export default function App() {
	return (
		<Layout>
			<Suspense fallback={<div>Loading...</div>}>
				<Switch>
					<Route
						exact
						path='/'
						render={() => <Home />}
					/>
					<Route
						path='/browse'
						render={() => <Browse />}
					/>
				</Switch>
			</Suspense>
		</Layout>
	);
}
