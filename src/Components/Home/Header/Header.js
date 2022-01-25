import React from 'react';
import Navbar from '../Navbar/Navbar';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <Navbar/>
            <h1 className='text-center text-white my-5'>Its The Food You Love, Delivered</h1>
            <SearchBar/>
        </div>
    );
};

export default Header;