import React from 'react'
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
    
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink to='/' extact className="nav-link" >Home <span class="sr-only">(current)</span></NavLink>
            <NavLink to='/events/:id' className="nav-link" href="#">All Pop-Ups</NavLink>
            <NavLink to='/events/new/' exact className="nav-link" href="#">Enter New Pop-Up</NavLink>

        </nav>
    )
}

export default NavBar
