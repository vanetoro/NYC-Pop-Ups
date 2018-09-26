import React from 'react'
import Moment from 'react-moment';


function Event(props) {
    return (
        <div>
            <h3>{props.event.name}</h3> 
            <p>Address: {props.event.location} </p>
            <p>Start Date: <Moment format='MMMM d YYYY'>{props.event.start_date}</Moment></p> 
            <p>End Date: <Moment format='MMMM d YYYY'>{props.event.end_date}</Moment></p> 
        </div>
    )
}

export default Event
