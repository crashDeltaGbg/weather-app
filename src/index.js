import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import combinedReducer from './reducers/combinedReducer';
// import { weatherReducer } from './reducers/weatherReducer';
// import { searchReducer } from './reducers/searchReducer';

const store = createStore(combinedReducer);

console.log(store);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
