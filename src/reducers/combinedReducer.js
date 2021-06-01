import { weatherReducer } from './weatherReducer';
import { searchReducer } from './searchReducer';
import { combineReducers } from 'redux';

const combinedReducer = combineReducers({
	weather: weatherReducer,
	search: searchReducer
});

export default combinedReducer;
