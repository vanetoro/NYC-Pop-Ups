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
        .then(data => dispatch({type: 'FETCH_EVENTS', data}))
    }
}
export function deleteEvent(id) {
    return(dispatch) => {
        dispatch({type: 'LOADING'})
        return window.fetch(`/api/events/${id}`, {
            method: 'DELETE'

        })
        .then(dispatch({type: 'DELETE_EVENT', id}))
        
        // .then(response => response.json())
        // .then(data => dispatch({type: 'DELETE_EVENT', data}))
    }
}
export function postEvent(formData) {
    return(dispatch) => {
        dispatch({type: 'LOADING'})
        return window.fetch(`/api/events/`,{
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => dispatch({type: 'POST_EVENT', data}))
    }
}



