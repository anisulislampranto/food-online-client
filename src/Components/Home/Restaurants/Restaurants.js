import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Restaurant from '../Restaurant/Restaurant';
import './Restaurants.css';


const Restaurants = () => {
    const [restaurants, setRestaurants] = useState([]);
    console.log(restaurants);



    useEffect(()=>{
        fetch('http://localhost:4040/restaurants')
        .then(res => res.json())
        .then(data => setRestaurants(data[0].restaurants))
    },[])

    return (
        <div className='container'>
            <h1 className='background-text'>Restaurants</h1>

            <div style={{marginTop:'-60px'}} className='row'>
                    {
                        restaurants?.map(restaurant => <Restaurant restaurant={restaurant}></Restaurant>)
                    }
            </div>

        </div>
    );
};

export default Restaurants;