import React from 'react';
import AddRestaurants from '../../Dashboard/AddRestaurants/AddRestaurants';
import Header from '../Header/Header';
import HostRestaurant from '../HostRestaurant/HostRestaurant';
import Restaurants from '../Restaurants/Restaurants';

const Home = () => {
    return (
        <div>
            <Header/>
            <AddRestaurants/>
            <Restaurants/>
            <HostRestaurant/>
        </div>
    );
};

export default Home;