import React from 'react';
import { Link } from 'react-router-dom';  // Remove the duplicate import
import '../styles.css';  // Ensure this is the correct path for your styles

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                {/* Add more navigation links if needed */}
            </ul>
        </nav>
    );
};

export default Navbar;
