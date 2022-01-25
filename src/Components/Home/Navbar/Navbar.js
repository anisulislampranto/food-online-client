import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand">FoodOnline</a>
                <Link to='/login'>
                    Log In
                </Link>
            </div>
            </nav>
        </div>
    );
};

export default Navbar;