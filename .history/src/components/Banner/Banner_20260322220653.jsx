import React from 'react';
import bannerImg from '../../assets/banner-main.png'

const Banner = () => {
    return (
        <div className='max-w-[1200px] mx-auto h-[545px] bg-[#131313]/90 mt-8 mb-10 rounded-3xl'>
           <img src={bannerImg} alt="" className='w-2/12 mx-auto p-10'/> 
           <div>
            <h1 className='font-bold w-[970px] h-[60px] text-[#FFFFFF] text-center items-center w-2/12 mx-auto'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p>Beyond Boundaries Beyond Limits</p>
           </div>
        </div>
        
    );
};

export default Banner;