import React from 'react';

const SelectedPlayers = ({purchasedPlayers}) => {
    console.log(purchasedPlayers)
    return (
        <div className='max-w-[1200px] mx-auto'>
           <div className='border-2 border-red-400'>
            <div>
                left
            </div>
            <div>
                <img className='w-10 h-10' src="https://i.ibb.co.com/HTN200Jz/delete.png" alt="" />
            </div>

           </div>
        </div>
    );
};

export default SelectedPlayers;