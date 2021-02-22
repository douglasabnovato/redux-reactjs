export default function listtodo(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            
            return [
                ...state,
                {
                    id: Math.random(),
                    text: action.payload.text
                }
            ];
    
        default:
            return state;
    }
}