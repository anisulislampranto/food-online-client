import React from 'react';
import { Link } from 'react-router-dom';
import './Restaurant.css';

const Restaurant = ({restaurant}) => {
    const {name, picture, type, _id} = restaurant;
    // console.log(id);

    return (
        <Link to={`/restaurant/${_id}`} className='col-md-3 restaurant-card'>
            <img style={{width:'100%'}} src={picture} alt="" srcset="" />
            <h1>{name}</h1>
            <p>$${type}</p>            
        </Link>
    );
};

export default Restaurant;