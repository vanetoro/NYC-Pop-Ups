export default function fetchEvents() {
    return(dispatch) => {
        dispatch({type: 'LOADING'})
        return window.fetch('/api/events')
        .then(response => response.json())
        .then(data => dispatch({type: 'FETCH_EVENTS', data}))
    }
}
export function getHoods() {
    return(dispatch) => {
        dispatch({type: 'LOADING'})
        return window.fetch('/api/neighborhoods')
        .then(response => response.json())
        .then(data => dispatch({type: 'FETCH_HOODS', data}))
    }
}

export function fetchEvent(id) {
    return(dispatch) => {
        dispatch({type: 'LOADING'})
        return window.fetch(`/api/events/${id}`)
        .then(response => response.json())
        .then(data => dispatch({type: 'FETCH_EVENT', data}))
    }
}
export function postEvent(state) {
    state = {...state, neighborhood_id: state.neighborhood.id}
    let body = JSON.stringify(state)
    debugger
    return(dispatch) => {
        dispatch({type: 'LOADING'})
        return window.fetch(`/api/events/`,{
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: body,
        })
        .then(response => response.json())
        .then(data => dispatch({type: 'FETCH_EVENT', data}))
    }
}



