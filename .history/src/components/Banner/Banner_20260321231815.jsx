import React from 'react';
import bannerImg from '../../assets/banner-main.png'

const Banner = () => {
    return (
        <div className='max-w-[1200px] mx-auto ml-94 bg-amber-400'>
            
            <img src={bannerImg} alt="" className='' />
        </div>
    );
};

export default Banner;