import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
        <div className='navbar'>
            <div class="container-fluid">
                <h1 style={{fontSize:'30px'}} class="navbar-brand text-bold text-white">FoodOnline</h1>
                <Link className='text-white' to='/login'> Log In </Link>
            </div>
            
        </div>
    );
};

export default Navbar;