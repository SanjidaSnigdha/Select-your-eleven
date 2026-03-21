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
                <img src="https://i.ibb.co.com/HTN200Jz/delete.png" className='w-[40px] h-[30px]' alt="" />
            </div>

           </div>
        </div>
    );
};

export default SelectedPlayers;