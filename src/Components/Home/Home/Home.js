import React from 'react';
import Header from '../Header/Header';
import HostRestaurant from '../HostRestaurant/HostRestaurant';
import Restaurants from '../Restaurants/Restaurants';

const Home = () => {
    return (
        <div>
            <Header/>
            <Restaurants/>
            <HostRestaurant/>
        </div>
    );
};

export default Home;