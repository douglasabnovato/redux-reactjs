import { takeEvery, put } from 'redux-saga/effects';

function* asyncAddListTodo(action) {
    console.log('entrou3'); 
    yield put({ type: 'ADD_LISTTODO', payload: { text: action.payload.text }});
}

export default function* root(){  
    yield [
        takeEvery('ASYNC_ADD_LISTTODO', asyncAddListTodo),
    ];
}