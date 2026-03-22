import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({purchasedPlayers,removePlayer,setToggle}) => {
    console.log(purchasedPlayers)
    return (
        <div className='max-w-[1200px] mx-auto'>
            {
                purchasedPlayers.map(player=><SelectedCard removePlayer={removePlayer} player={player}></SelectedCard>)
            }
         <button onClick={()=>setToggle(true)} className={"py-3 px-4  mt-5 border-0 border-gray-400 rounded-2xl border-r-0 bg-[#E7FE29]"}>Add more player</button>
        </div>
        
    );
};

export default SelectedPlayers;