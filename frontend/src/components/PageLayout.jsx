import React from 'react';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import '../styles.css';

const PageLayout = ({ children }) => {
    return (
        <div className="page-layout">
            <Navbar />
            <Navbar2 />
            <div className="content">
                {children}
            </div>
        </div>
    );
};

export default PageLayout;
