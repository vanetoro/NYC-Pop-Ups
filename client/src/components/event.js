import React from 'react'
import Moment from 'react-moment';
// import { Redirect } from 'react-router-dom'




function Event(props) {

   const handleClick = (e)=> {
        e.preventDefault()
        this.context.history.push(`/events/${props.event.id}`)
        // Redirect to={`/events/${props.event.id}`}
    }

    return (
        <div className="col-8">
        <div className='card' style={{width: "19rem"}}>
            <h4 className="card-header">{props.event.name}</h4> 
            {/* <p>Address: {props.event.location} </p> */}
            {/* <p>Start Date: <Moment format='MMMM DD YYYY'>{props.event.start_date}</Moment></p> 
            <p>End Date: <Moment format='MMMM DD YYYY'>{props.event.end_date}</Moment></p>  */}
            {/*  */}
            <a href="#" class="btn btn-primary" onClick={handleClick}>See More</a>
        </div>
        </div>
    )
}

export default Event
