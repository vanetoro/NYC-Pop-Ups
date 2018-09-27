import React from 'react'
import Moment from 'react-moment';


function Event(props) {
    return (
        <div className="col-sm-8">
        <div className='card' style={{width: "19rem"}}>
            <h4 className="card-header">{props.event.name}</h4> 
            <p>Address: {props.event.location} </p>
            <p>Start Date: <Moment format='MMMM dd YYYY'>{props.event.start_date}</Moment></p> 
            <p>End Date: <Moment format='MMMM dd YYYY'>{props.event.end_date}</Moment></p> 
            <a href="#" class="btn btn-primary">See More</a>
        </div>
        </div>
    )
}

export default Event
