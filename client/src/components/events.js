import React from 'react'
import Event from './event'

function Events(props) {
    let event = props.events.map(event => <div className='col-4' key={event.id}><Event event={event}/></div>)
    return (
        <div className="container ">
            <div className='row'>
                <h2 className='mr-auto'>Current Pop-Ups</h2>
            </div>   
            <div className="row">
                {event}
            </div> 
        </div>   
    )
}

export default Events
