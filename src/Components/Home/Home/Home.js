import React from 'react';
import Navbar from '../Navbar/Navbar';
import Restaurants from '../Restaurants/Restaurants';
import SearchBar from '../SearchBar/SearchBar';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <SearchBar/>
            <Restaurants/>
        </div>
    );
};

export default Home;