import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import Cart from '../Cart/Cart';
import MenuItem from '../MenuItem/MenuItem';
import Navbar from '../Navbar/Navbar';
import './RestaurantMenu.css';

const RestaurantMenu = () => {
    const {id} = useParams();
    const [restaurant, setRestaurant] = useState({});
    const [menu, setMenu] = useState([]);

    const { picture, name, type} = restaurant;

    console.log(menu);


    useEffect(()=>{
        fetch(`http://localhost:4040/restaurant/${id}`)
        .then(res => res.json())
        .then(data => {
            setRestaurant(data[0])
            setMenu(data[0].menu)
            })
    },[id])

    return (
        <div>
            <Navbar />
            <img style={{marginTop:'-70px'}} className='restaurant-img' src={picture} alt="" srcset="" />
            <div style={{marginTop:'-100px'}} className='d-flex container'>
                <div className='col-md-8'>
                    <div style={{marginTop:'-90px', position:'sticky', top:0}} className='restaurant-heading'>
                            <h1>{name}</h1>
                            <p>$$ {type}</p>
                    </div>
                    
                    {
                        menu.map(menuItem => <MenuItem menuItem={menuItem} />)
                    }
                </div>
                <div className='col-md-4 mx-5'>
                    <Cart/>
                </div>
            </div>
        </div>
    );
};

export default RestaurantMenu;