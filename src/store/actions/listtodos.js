export function addListTodo(text){ 
    return{
        type: 'ADD_LISTTODO',//ASYNC_ADD_LISTTODO - com redux-saga
        payload: {
            text,
        }
    }
}