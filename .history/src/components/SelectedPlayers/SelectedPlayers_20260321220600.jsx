import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({purchasedPlayers,removePlayer}) => {
    console.log(purchasedPlayers)
    return (
        <div className='max-w-[1200px] mx-auto'>
            {
                purchasedPlayers.map(player=><SelectedCard removePlayer={removePlayer} player={player}></SelectedCard>)
            }
            <button className='btn mt-5 bg-[#E7FE29] rounded-xl text-xl'>Add more player</button>
          
        </div>
        
    );
};

export default SelectedPlayers;