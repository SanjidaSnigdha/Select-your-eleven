import React from 'react';

const SelectedCard = ({player,removePlayer}) => {
    console.log(player)
    return (
         <div className='border-2 mt-5 p-3 border-gray-300 flex justify-between items-center rounded-xl'>
            <div className='flex items-center'>
                <img src={player.player_image} className='h-[50px] w-[50px] rounded-xl' alt="" />
                <div className='ml-2'>
                    <h1>{player.player_name}</h1>
                    <p className='text-xs'>{player.playing_role}</p>
                </div>

            </div>
            <div>
                <img src="https://i.ibb.co.com/HTN200Jz/delete.png" className='w-[40px] h-[30px]' alt="" />
            </div>

           </div>
    );
};

export default SelectedCard;