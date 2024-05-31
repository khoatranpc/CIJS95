import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink className={(path) => {
                        return path.isActive ? 'active' : ''
                    }} to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/login" className={(path) => {
                        return path.isActive ? 'active' : ''
                    }}>Login</NavLink>
                </li>
                <li>
                    <NavLink to="/profile" className={(path) => {
                        return path.isActive ? 'active' : ''
                    }}>Profile</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Header;