import React from 'react'
import Event from './event'

function Events(props) {
    let event = props.events.map(event => <div key={event.id}><Event event={event}/></div>)
    return (
        <div className='row'>
            {event}
        </div>
    )
}

export default Events
