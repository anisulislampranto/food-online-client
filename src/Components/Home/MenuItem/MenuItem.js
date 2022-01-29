import { faPlus,faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './MenuItem.css';

const MenuItem = (props) => {
    const {dishName, description, price} = props.menuItem;

    return (
        <div>
            <div className='d-flex align-items-center justify-content-between menu-item-card'>
                <div>
                    <h1>{dishName}</h1>
                    <p>{description}</p>
                </div>
                <div className='text-center'>
                    <FontAwesomeIcon icon={faPlus} />
                    <p className='align-items-center'>${price}</p> 
                    <FontAwesomeIcon icon={faMinus} />
                </div>

                
            </div>
        </div>
    );
};

export default MenuItem;