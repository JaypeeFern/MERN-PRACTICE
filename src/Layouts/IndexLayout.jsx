import React from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'

export default function IndexLayout() {
    return (
        <div className='main--container'>
            <nav style={{display: 'flex', gap:'15px'}}>
                <NavLink to='/' exact>Home</NavLink>
                <NavLink to='about'>About</NavLink>
                <NavLink to='contact'>Contact</NavLink>
            </nav>
            <Outlet/>
        </div>
    )
}