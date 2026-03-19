import React, { use } from 'react';

const AvailablePlayers = ({fetchPlayers}) => {
    const playerData = use(fetchPlayers)
    console.log(playerData)
    return (
        <div>
            available
        </div>
    );
};

export default AvailablePlayers;