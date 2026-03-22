import React from 'react';
import bannerImg from '../../assets/banner-main.png'

const Banner = () => {
    return (
        <div className='max-w-[1800px] mx-auto'>
            
            <img src={bannerImg} alt="" />
        </div>
    );
};

export default Banner;