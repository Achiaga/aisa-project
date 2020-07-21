import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import Dashboard from './components/dashboard/dashboard';

export default function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/dashboard'>
					<Dashboard />
				</Route>
			</Switch>
		</Router>
	);
}
