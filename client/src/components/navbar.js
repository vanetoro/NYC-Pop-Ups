import React from 'react'
import { Navbar, NavItem, Nav, Button } from 'react-bootstrap';
import { Link, NavLink} from 'react-router-dom';

function NavBar(props) {
    console.log(props)
    return (
        <Navbar>
            <Navbar.Brand onClick={() => props.getEvents()} >NYC Pop-Ups</Navbar.Brand>
            <Nav>
            <NavItem>
                <Link to='/events/current'  className="nav-link" >CURRENT <span class="sr-only">(current)</span></Link>
            </NavItem>
            <NavItem>
                <NavLink to='/events/upcoming'  onClick={() => props.getUpcoming()} className="nav-link" href="#">UPCOMING</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to='/events/past' onClick={() => props.getPast()} className="nav-link" href="#">PAST</NavLink>
            </NavItem>
            <NavItem>
            </NavItem>
            </Nav>
            <Button bsStyle="success" className='custom-btn' onClick={(e) => props.newEvent(e)} >Add Event</Button>

        </Navbar>
    )
}

export default NavBar
