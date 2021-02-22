export function addListTodo(text){ 
    return{
        type: 'ASYNC_ADD_LISTTODO',//ASYNC_ADD_LISTTODO - com redux-saga
        payload: {
            text,
        }
    }
}