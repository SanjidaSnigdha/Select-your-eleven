import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({purchasedPlayers}) => {
    console.log(purchasedPlayers)
    return (
        <div className='max-w-[1200px] mx-auto'>
          <SelectedCard></SelectedCard>
        </div>
    );
};

export default SelectedPlayers;