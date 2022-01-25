import React from 'react';
import { Link } from 'react-router-dom';
import './HostRestaurant.css';

const HostRestaurant = () => {
    return (
        <div>
            <div className="container">
                <h1 className='background-text'>Partners</h1>
                <h1 className='headline-host-restaurants' >You Prepare The Food, We Handle The Rest</h1>
            </div>
            <div className='host-restaurant-background-image'>
                <div className='host-info-card col-md-6 mx-5 rounded'>
                    <h2>List your restaurant on FoodOnline</h2>
                    <p> Would you like millions of new customers to enjoy your amazing food? <br /> So would we! It's simple: we list your menu lists online, help you process orders, and deliver them to hungry pandas – in a heartbeat! Interested?  <br />  Let's start our partnership today!</p>
                    <Link to='/addrestaurant'>
                    <button className='btn btn-primary'>Get Started</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HostRestaurant;