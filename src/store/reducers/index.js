import { combineReducers } from 'redux';

import course from './course'; 
import todos from './todos';
import listtodo from './listtodo';

export default combineReducers({
    course,
    todos,
    listtodo,
});