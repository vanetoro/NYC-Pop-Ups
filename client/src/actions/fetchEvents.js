export default function fetchEvents() {
    return(dispatch) => {
    window.fetch('/api/events')
        .then(response => response.json())
        .then(data => dispatch({type: 'FETCH_EVENTS', data}))
    }
}

