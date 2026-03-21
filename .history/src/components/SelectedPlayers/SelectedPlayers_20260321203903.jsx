import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({player,purchasedPlayers}) => {
    console.log(purchasedPlayers)
    return (
        <div className='max-w-[1200px] mx-auto'>
            {
                purchasedPlayers.map(player=><SelectedCard purchasedPlayers={purchasedPlayers} player={player}></SelectedCard>)
            }
          
        </div>
    );
};

export default SelectedPlayers;