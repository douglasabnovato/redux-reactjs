import delay from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';//takeLatest|takeEvery

function* asyncAddListTodo(action) { 
    yield delay(2000);
    yield put({ type: 'ADD_LISTTODO', payload: { text: action.payload.text }});
}

export default function* root(){  
    yield [
        takeEvery('ASYNC_ADD_LISTTODO', asyncAddListTodo),
    ];
}