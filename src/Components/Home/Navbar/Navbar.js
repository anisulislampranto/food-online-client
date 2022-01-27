import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'



const Navbar = () => {
    return (
        <div className='navbar'>
            <div class="container-fluid">
                <Link className='text-decoration-none' to='/'>
                    <h1 style={{fontSize:'30px'}} class="navbar-brand text-bold logo">FoodOnline</h1>
                </Link>

                <Link className='login-btn' to='/login'> Log In </Link>
            </div>
            
        </div>
    );
};

export default Navbar;