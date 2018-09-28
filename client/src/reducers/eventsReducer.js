export default function eventsReducer(state = {
    events:  [], 
    show: false
}, action) {
    switch (action.type) {
        case 'FETCH_EVENTS':
            return {...state, events: action.data}
        case 'FETCH_EVENT':
            return{...state, events: action.data}
        case 'ADD_EVENT':
            return{...state, show: true}    
        default:
            return state;
    }
}

