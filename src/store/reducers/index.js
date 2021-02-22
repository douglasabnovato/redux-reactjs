import { combineReducers } from 'redux';

import course from './course'; 
import todos from './todos';
import listtodos from './listtodos';

export default combineReducers({
    course,
    todos,
    listtodos,
});