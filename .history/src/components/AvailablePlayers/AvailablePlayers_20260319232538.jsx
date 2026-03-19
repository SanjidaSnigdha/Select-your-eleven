import React, { use } from 'react';
import userImg from "../../assets/man.png"
import flagImg from "../../assets/flag.jpg"

const AvailablePlayers = ({playersPromise}) => {
    const playerData = use(playersPromise)
    console.log(playerData)
    return (
        <div className='max-w-[1200px] mx-auto'>

            {
              playerData.map(player=>
                     <div className="card bg-base-100 w-96 shadow-sm p-4">
  <figure className="px-10 pt-10">
    <img
      src={player.player_image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="mt-4">
    <div className='flex'>
        <img className='w-8 h-8' src={userImg} alt="" /><h2 className='card-title ml-2'>{player.player_name}</h2>
    </div>
    <div className='flex justify-between mt-4 border-b-2 border-gray-400 pb-2'>
<div className='flex items-center'>
    <img className='w-8 h-8' src={flagImg} alt="" />
    <span className='ml-2'>{player.player_country}</span>
    </div>
    <button className='btn'>{player.playing_role}</button>
    </div>
<div className='flex justify-between font-bold'>
    <span>{player.rating}</span>
    
</div>
<div className='flex justify-between mt-4'>
    <span className='font-bold'>{player.bating_style}</span>
    <span>Right hand bowl</span>
</div>

    <div className="card-actions mt-3 flex justify-between items-center">
        <p className='font-bold'>Price: $1500000</p>
      <button className="btn">Choose player</button>
    </div>
  </div>
</div> 

              )  
            }
    
        </div>
    );
};

export default AvailablePlayers;