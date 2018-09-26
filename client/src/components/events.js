import React from 'react'
import Event from './event'

function Events(props) {
    // debugger
    let event = props.events.map(event => <div key={event.id}><Event event={event}/></div>)
    return (
        <div>
            {event}
            This the events component
        </div>
    )
}

export default Events
