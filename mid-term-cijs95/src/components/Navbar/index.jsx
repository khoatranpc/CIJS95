import React from 'react';
import './styles.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <h1>Anonime</h1>
            <a>Home</a>
            <a>List anime</a>
            <div className='searchInput'>
                <input type="text" placeholder='Search anime or movie'/>
            </div>
        </div>
    )
}

export default Navbar;