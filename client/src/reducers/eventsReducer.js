export default function eventsReducer(state = {
    events:  [], 
    hoods: [],
    show: false,
    editEvent: {},
}, action) {
    switch (action.type) {
        case 'FETCH_EVENTS':
            return {...state, events: action.data}
        case 'ADD_EVENT':
            return{...state, show: !state.show, editEvent: {}} 
        case 'POST_EVENT':
            return{...state, events: [...state.events, action.data], show: !state.show}
        case 'UPDATE_EVENT':
            let removeUpdatedEvent = state.events.filter(event => event.id !== action.data.id)
            return{...state, events: [...removeUpdatedEvent, action.data], show: !state.show}
        case 'POST_LIKE':
          let removeLikedEvent = state.events.filter(event => event.id !== action.data.id)
           return{...state, events: [...removeLikedEvent, action.data]}
        case 'DELETE_EVENT':
            return{...state, events: [...state.events.filter(event => event.id !== action.id)]} 
        case 'EDIT_EVENT':
            return{...state, editEvent: action.state, show: !state.show} 
        case 'FETCH_HOODS':
        return {...state, hoods: action.data}   
        default:
            return state;
    }
}

