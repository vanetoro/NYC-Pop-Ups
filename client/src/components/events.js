import React from 'react'
import Event from './event'
import { Row } from 'react-bootstrap';


function Events(props) {
    console.log(props)
    let event = props.events.map(event =>{
            return  (
                <div key={event.id}>
                    <Event event={event} getEvent={props.getEvent}/>
                </div>)})
    return (
        <div className="container ">
                <h2 className='mr-auto'>{props.type} Pop-Ups</h2>
                {event}
        </div>   
    )
}

export default Events
