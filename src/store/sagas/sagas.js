import delay from 'redux-saga';
import { takeEvery, put, call } from 'redux-saga/effects';//takeLatest|takeEvery

function apiGet(text){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(text + ' da Rocketseat.');
        }, 2000);
    });
}

function* asyncAddListTodo(action) { 
    try{
        const response = yield call(apiGet, action.payload.text);
        yield put({ type: 'ADD_LISTTODO', payload: { text: response }}); 
    } catch (err) {

    }
}

export default function* root(){  
    yield [
        takeEvery('ASYNC_ADD_LISTTODO', asyncAddListTodo),
    ];
}