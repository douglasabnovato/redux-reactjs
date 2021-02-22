export default function listtodos(state = [], action) { 
    switch (action.type) {
        case 'ADD_LISTTODO': 
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