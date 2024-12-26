import React from 'react';
import { Link } from 'react-router-dom';  // Remove the duplicate import
import '../styles.css';  // Ensure this is the correct path for your styles

const Navbar = () => {
    return (
        <nav className='navbar2'>
            <ul>
                <li><Link to='/'>Genres</Link></li>
                <li><Link to='/'>Podcasts</Link></li>
                {/* Add more navigation links if needed */}
            </ul>
        </nav>
    );
};

export default Navbar;
