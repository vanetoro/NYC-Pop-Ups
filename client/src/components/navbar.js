import React from 'react'
import { Navbar, NavItem, Nav, Button } from 'react-bootstrap';
import { NavLink} from 'react-router-dom';

function NavBar(props) {
    
    return (
        <Navbar>
            <Navbar.Brand>NYC Pop-Ups</Navbar.Brand>
            <Nav>
            <NavItem>
                <NavLink to='/' extact className="nav-link" >CURRENT <span class="sr-only">(current)</span></NavLink>
            </NavItem>
            <NavItem>
                <NavLink to='events/upcoming' className="nav-link" href="#">UPCOMING</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to='/events/:id' className="nav-link" href="#">PAST</NavLink>
            </NavItem>
            <NavItem>
            </NavItem>
            </Nav>
        </Navbar>
    )
}

export default NavBar
