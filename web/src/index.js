import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import PhoneList from './pages/phone/list/phone-list';
import PhoneDetail from './pages/phone/detail/phone-detail';
import NotFound from './pages/notfound/NotFound';
import phoneReducer from './reducers/phones';

const store = createStore(phoneReducer);

const app = (
	<Provider store={store}>
		<Router>
			<div>
				<Switch>
					<Route exact path="/" component={PhoneList}/>
					<Route exact path="/phones/:id" component={PhoneDetail}/>
					<Route component={NotFound}/>
				</Switch>
			</div>
		</Router>
	</Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
