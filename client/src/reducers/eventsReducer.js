export default function eventsReducer(state = {
    events:  [], 
    hoods: [],
    show: false
}, action) {
    switch (action.type) {
        case 'FETCH_EVENTS':
            return {...state, events: action.data}
        case 'FETCH_EVENT':
            return{...state, events: action.data}
        case 'ADD_EVENT':
            return{...state, show: !state.show} 
        case 'FETCH_HOODS':
        return {...state, hoods: action.data}   
        default:
            return state;
    }
}

