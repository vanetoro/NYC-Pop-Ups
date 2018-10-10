import React from 'react'
import { Col } from 'react-bootstrap';
import { NavLink} from 'react-router-dom';

function Event(props) {

    return (
            <Col xs={6} md={3}>
                <h4 >{props.event.name}</h4> 
                
                <NavLink to={`/events/${props.event.id}`} className="nav-link" >See More</NavLink>
            </Col>
    )
}

export default Event
