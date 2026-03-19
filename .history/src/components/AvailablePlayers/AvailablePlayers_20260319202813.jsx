import React, { use } from 'react';
import userImg from "../../assets/man.png"

const AvailablePlayers = ({playersPromise}) => {
    const playerData = use(playersPromise)
    console.log(playerData)
    return (
        <div className='max-w-[1200px] mx-auto'>
          <div className="card bg-base-100 w-96 shadow-sm p-4">
  <figure className="px-10 pt-10">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="">
   <img src={userImg} alt="" /> <h2 className="card-title">Virat kholi</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>  
        </div>
    );
};

export default AvailablePlayers;