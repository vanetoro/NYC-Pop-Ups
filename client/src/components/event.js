import React from 'react'
import { Col, Image } from 'react-bootstrap';
import { NavLink} from 'react-router-dom';

function Event(props) {

    return (
            <Col xs={6} md={3}>
                    <NavLink to={`/events/${props.event.id}`} className="nav-link" >
                        <h4 >{props.event.name}</h4> 
                <div style={{height: 175}}>
                        <Image style={{height: 150, width: 'auto', marginLeft: 'auto', marginRight: 'auto'}} src={props.event.imageUrl} rounded responsive/>
                </div>
                    </NavLink>
            </Col>
    )
}

export default Event
