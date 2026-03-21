import React, { useState } from 'react';
import userImg from "../../assets/man.png"
import flagImg from "../../assets/flag.jpg"

const PlayerCard = ({player,setAvailableBalance,availableBalance}) => {
    const [isSelected,setIsSelected] = useState(false)
    return (
                        <div className="card bg-base-100 shadow-sm p-4">
         <figure className="px-10 pt-10">
           <img
             src={player.player_image}
             alt="Shoes"
             className='w-full h-[280px] object-cover'
              />
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
           <span>{player.bowling_style}</span>
       </div>
       
           <div className="card-actions mt-3 flex justify-between items-center">
               <p className='font-bold'>${player.price}</p>
             <button disabled={isSelected} onClick={()=>{setIsSelected(true)
                setAvailableBalance(availableBalance-player.price.split("USD").json("").split(",").join(""))
             }} className="btn">{isSelected===true?"Selected":"Choose player"}</button>
           </div>
         </div>
       </div> 
    );
};

export default PlayerCard;