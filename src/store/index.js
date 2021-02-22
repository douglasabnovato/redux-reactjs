import { createStore, applyMiddleware, combineReducers } from 'redux'; 
import createSagaMiddleware from 'redux-saga';

import course from './reducers/course'; 
import todos from './reducers/todos';
import listtodos from './reducers/listtodos';
import rootSaga from './sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({
        course,
        todos,
        listtodos,
    }),
    applyMiddleware(sagaMiddleware),
);  

sagaMiddleware.run(rootSaga);

export default store;  