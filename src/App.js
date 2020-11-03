import React from 'react';
import './App.css';

import Sidebar from './components/layout';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import Example from './components/sidebar/example'

function App() {
	return (
		<Router>
			<div className='App'>
				<Switch>
					<Route path="/example" component={Example} />
					<Route path="/home" component={Sidebar} />
				</Switch>

			</div>

		</Router>
	);
}

export default App;
