import delay from 'redux-saga'; 
import { takeEvery, put, call } from 'redux-saga/effects';

function apiGet(text){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text + ' da Rocketseat.');
        }, 2000);
    });  
}

function* asyncAddTodo(action){
    const response = yield call(apiGet, action.payload.text);
    yield put({ type:'ADD_TODO', payload: { text: response }});
} 

export default function* root(){
    yield[
        takeEvery('ASYNC_ADD_TODO', asyncAddTodo)
    ];
} 