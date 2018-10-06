import React from 'react'
import { Button, Col } from 'react-bootstrap';
import { NavLink} from 'react-router-dom';
// import Moment from 'react-moment';
// import { Redirect } from 'react-router-dom'



function Event(props) {

//    const handleClick = (e)=> {
//         e.preventDefault()
//         this.context.history.push(`/events/${props.event.id}`)
//         // Redirect to={`/events/${props.event.id}`}
//     }

    return (
            <Col xs={6} md={3}>
                <h4 >{props.event.name}</h4> 
                {/* <p>Address: {props.event.location} </p> */}
                {/* <p>Start Date: <Moment format='MMMM DD YYYY'>{props.event.start_date}</Moment></p> 
                <p>End Date: <Moment format='MMMM DD YYYY'>{props.event.end_date}</Moment></p>  */}
                {/*  */}
                <NavLink to={`/events/${props.event.id}`} className="nav-link" ><Button bsSize="small" bsStyle="primary" onClick={() => props.getEvent(props.event.id)}>See More</Button></NavLink>
            </Col>
    )
}

export default Event
