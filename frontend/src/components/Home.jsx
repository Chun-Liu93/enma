import React from 'react';
import FetchCategories from './Api';

const Home = () => {
    return (
        <div className="home">
            <FetchCategories />
        </div>
    );
};

export default Home;
