import { combineReducers } from 'redux';

import todos from './todos';
import sidebar from './sidebar';

/*
 * reducers  
**/
export default combineReducers({
	todos,
	sidebar,
});
