import React from 'react';
import MyFace from '../assets/img/my_face.jpg';

const Face = () => {
    return (
        <div className='face-container'>
            <img src={MyFace} alt="face"/>
        </div>
    );
};

export default Face;
