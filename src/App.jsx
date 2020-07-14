import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router';
import Layout from './components/layout';

const Home = lazy(() => import('./pages/home'));

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
				</Switch>
			</Suspense>
		</Layout>
	);
}
