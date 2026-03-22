import React from 'react';
import bannerImg from '../../assets/banner-main.png'

const Banner = () => {
    return (
        <div className='w-full mx-auto'>
            
            <img src={bannerImg} alt="" />
        </div>
    );
};

export default Banner;