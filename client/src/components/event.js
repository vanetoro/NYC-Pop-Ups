import React from 'react'
import { Col, Image } from 'react-bootstrap';
import { NavLink} from 'react-router-dom';

function Event(props) {

    return (
            <Col xs={6} md={3}>
                <NavLink to={`/events/${props.event.id}`} className="nav-link" >
                    <Image src={props.event.imageUrl} rounded responsive/>
                    <h4 >{props.event.name}</h4> 
                </NavLink>
            </Col>
    )
}

export default Event
