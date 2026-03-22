import React from 'react';
import bannerImg from '../../assets/banner-main.png'

const Banner = () => {
    return (
        <div className='w-full'>
            
            <img src={bannerImg} alt="" className='w-full' />
        </div>
    );
};

export default Banner;