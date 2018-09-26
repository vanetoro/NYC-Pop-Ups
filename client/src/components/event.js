import React from 'react'

function Event(props) {
    return (
        <div>
            <h3>{props.event.name}</h3> 
            <p>Address: {props.event.location} </p>
            <p>Start Date: {props.event.start_date}</p> 
            <p>End Date: {props.event.end_date}</p> 
        </div>
    )
}

export default Event
