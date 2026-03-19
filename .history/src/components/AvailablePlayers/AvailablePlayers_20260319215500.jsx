import React, { use } from 'react';
import userImg from "../../assets/man.png"
import flagImg from "../../assets/flag.jpg"

const AvailablePlayers = ({playersPromise}) => {
    const playerData = use(playersPromise)
    console.log(playerData)
    return (
        <div className='max-w-[1200px] mx-auto'>
          <div className="card bg-base-100 w-96 shadow-sm p-4">
  <figure className="px-10 pt-10">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="mt-4">
    <div className='flex'>
        <img className='w-8 h-8' src={userImg} alt="" /><h2 className='card-title ml-2'>Virat kohli</h2>
    </div>
    <div className='flex justify-between mt-4 border-b-2 border-gray-400 pb-2'>
<div className='flex items-center'>
    <img className='w-8 h-8' src={flagImg} alt="" />
    <span className='ml-2'>India</span>
    </div>
    <button className='btn'>All rounder</button>
    </div>
    <div className="card-actions mt-3 justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>  
        </div>
    );
};

export default AvailablePlayers;