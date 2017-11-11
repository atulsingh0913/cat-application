import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from "./Routes";
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const middleware = [ thunk ]
const store = createStore(
	reducer, 
	applyMiddleware(...middleware)
)

ReactDOM.render(
	<Provider store={store}>
		<Routes />
	</Provider>, 
	document.getElementById('root')
);
registerServiceWorker();
