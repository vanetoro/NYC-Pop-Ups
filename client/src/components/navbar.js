import React from 'react'
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { NavLink} from 'react-router-dom';

function NavBar() {
    return (
        <Navbar >
            <Navbar.Brand>NYC Pop-Ups</Navbar.Brand>
            <Nav>
            <NavItem>
                <NavLink to='/' extact className="nav-link" >CURRENT <span class="sr-only">(current)</span></NavLink>
            </NavItem>
            <NavItem>
                <NavLink to='/events/:id' className="nav-link" href="#">UPCOMING</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to='/events/:id' className="nav-link" href="#">PAST</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to='/events/new/' exact className="nav-link" href="#">ENTER NEW POP-UP</NavLink>
            </NavItem>
            </Nav>
        </Navbar>
    )
}

export default NavBar
