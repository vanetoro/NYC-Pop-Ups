import React from 'react'
import { Navbar, NavItem, Nav, Button } from 'react-bootstrap';
import { NavLink} from 'react-router-dom';

function NavBar(props) {
    console.log(props)
    return (
        <Navbar>
            <Navbar.Brand>NYC Pop-Ups</Navbar.Brand>
            <Nav>
            <NavItem>
                <NavLink to='events/current' onClick={() => props.getCurrent()}  className="nav-link" >CURRENT <span class="sr-only">(current)</span></NavLink>
            </NavItem>
            <NavItem>
                <NavLink to='events/upcoming'  onClick={() => props.getUpcoming()} className="nav-link" href="#">UPCOMING</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to='/events/past' onClick={() => props.getPast()} className="nav-link" href="#">PAST</NavLink>
            </NavItem>
            <NavItem>
            </NavItem>
            </Nav>
        </Navbar>
    )
}

export default NavBar
