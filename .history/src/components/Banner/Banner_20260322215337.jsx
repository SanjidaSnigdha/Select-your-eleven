import React from 'react';
import bannerImg from '../../assets/banner-main.png'

const Banner = () => {
    return (
        <div className='max-w-[1200px] mx-auto h-[545px] bg-[#131313]/90 mt-8 mb-10 rounded-3xl'>
           <img src={bannerImg} alt="" className='w-3/12 mx-auto mt-10'/> 
        </div>
    );
};

export default Banner;