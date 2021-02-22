export function addListtodo(text){
    return{
        type: 'ADD_LISTTODO',
        payload: {
            text,
        }
    }
}