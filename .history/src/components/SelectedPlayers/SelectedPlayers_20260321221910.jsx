import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({purchasedPlayers,removePlayer}) => {
    console.log(purchasedPlayers)
    return (
        <div className='max-w-[1200px] mx-auto'>
            {
                purchasedPlayers.map(player=><SelectedCard removePlayer={removePlayer} player={player}></SelectedCard>)
            }
            {/* <button onClick= "" className='btn mt-5 bg-[#E7FE29] rounded-xl font-bold'>Add more player</button> */}
        <button onClick={()=>setToggle(true)} className={`py-3 px-4 border-1 border-gray-400 rounded-l-2xl border-r-0 ${toggle===true?"bg-[#E7FE29]":""}`}>Available</button>
        
        </div>
        
    );
};

export default SelectedPlayers;