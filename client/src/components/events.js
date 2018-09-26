import React from 'react'
import Event from './event'

function Events(props) {
    // debugger
    let event = props.events.map(event => <div key={event.id}><Event event={event}/></div>)
    return (
        <div>
            {event}
        </div>
    )
}

export default Events
