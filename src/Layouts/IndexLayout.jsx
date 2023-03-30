import React from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'

export default function IndexLayout() {
    return (
        <div className='main--container'>
            <nav style={{display: 'flex', gap:'15px'}}>
                <NavLink end to='/'>Dashboard</NavLink>
                <NavLink to='login'>Login</NavLink>
                <NavLink to='register'>Register</NavLink>
            </nav>
            <Outlet/>
        </div>
    )
}