import React from 'react';
import { Link } from 'react-router-dom';
import './Restaurant.css';

const Restaurant = ({restaurant}) => {
    const {name, image, type} = restaurant;

    return (
        <Link to='/res' className='col-md-4 restaurant-card'>
            <img style={{width:'100%'}} src={image} alt="" srcset="" />
            <h1>{name}</h1>
            <p>{type}</p>            
        </Link>
    );
};

export default Restaurant;