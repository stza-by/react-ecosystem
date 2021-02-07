import React from 'react';
import { Link } from 'react-router-dom';

import './NotFound.scss';

const NotFound = () => {
    return (
        <div className='not-found-container'>
            <h1>PAGE NOT FOUND</h1>

            <Link to='/'>
                <button className='back-button'>
                    Back to main page
                </button>
            </Link>
        </div>
    );
};

export default NotFound;
