import React from 'react';
import MyFace from '../assets/img/my_face.jpg';
import {Link} from "react-router-dom";

import './Face.scss';

const Face = () => {
    return (
        <div className='face-container'>
            <img src={MyFace} alt="face"/>

            <Link to='/'>
                <button className='back-button'>
                    Back to main page
                </button>
            </Link>
        </div>
    );
};

export default Face;
