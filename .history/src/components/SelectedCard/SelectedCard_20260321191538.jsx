import React from 'react';

const SelectedCard = ({player}) => {
    return (
         <div className='border-2 p-3 border-gray-300 flex justify-between items-center rounded-xl'>
            <div className='flex items-center'>
                <img src="" className='h-[50px] w-[50px] rounded-xl' alt="" />
                <div className='ml-2'>
                    <h1>Tamim</h1>
                    <p className='text-xs'>Left-Hand-Bat</p>
                </div>

            </div>
            <div>
                <img src="https://i.ibb.co.com/HTN200Jz/delete.png" className='w-[40px] h-[30px]' alt="" />
            </div>

           </div>
    );
};

export default SelectedCard;