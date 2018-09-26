export default function fetchEvents() {
    return(dispatch) => {
        dispatch({type: 'LOADING'})
        return window.fetch('/api/events')
        .then(response => response.json())
        .then(data => dispatch({type: 'FETCH_EVENTS', data}))
    }
}

