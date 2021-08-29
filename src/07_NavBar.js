import React from 'react'
import {NavLink} from 'react-router-dom'


const NavBar = () => {
    return (
        <>
        <div className  = 'navbar'>
        <NavLink to ='/' >About</NavLink>
        <NavLink to ='/contact' >Contact</NavLink>
        <NavLink to ='/service' >Service</NavLink>
        <NavLink to ='/user' >User</NavLink>
        <NavLink to ='/search' >Search</NavLink>
        </div> 
        </>
    )
}

export default NavBar
