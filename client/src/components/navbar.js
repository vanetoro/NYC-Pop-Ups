import React from 'react'
import { Navbar, NavItem, Nav, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function NavBar(props) {
  return (
    <Navbar>
      <Navbar.Brand>
        <NavLink to="/">NYC Pop-Ups</NavLink>
      </Navbar.Brand>
      <Nav>
        <NavItem>
          <NavLink to="/current" className="nav-link">
            CURRENT <span class="sr-only">(current)</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/upcoming" className="nav-link" href="#">
            UPCOMING
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/past" className="nav-link" href="#">
            PAST
          </NavLink>
        </NavItem>
        <NavItem />
      </Nav>
      <Button bsStyle="success" className="custom-btn" onClick={e => props.newEvent(e)}>
        Add Event
      </Button>
    </Navbar>
  )
}

export default NavBar
