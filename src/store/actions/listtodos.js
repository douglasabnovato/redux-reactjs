export function addListTodo(text){
    return{
        type: 'ADD_LISTTODO',
        payload: {
            text,
        }
    }
}