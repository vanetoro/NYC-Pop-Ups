export default function eventsReducer(state = {
    events:  []
}, action) {
    switch (action.type) {
        case 'FETCH_EVENTS':
            return {...state, events: action.data}
        case 'FETCH_EVENT':
            return{...state, events: action.data}
        default:
            return state;
    }
}

