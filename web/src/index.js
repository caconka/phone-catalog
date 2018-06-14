import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';
import NotFound from './pages/NotFound';

const app = (
	<Router>
		<div>
			<Switch>
				<Route exact path="/" component={App} />
				<Route component={NotFound} />
			</Switch>
		</div>
	</Router>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
