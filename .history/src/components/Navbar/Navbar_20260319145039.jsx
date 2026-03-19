import React from 'react';
import navImg from "../../assets/logo.png"
import dollarImg from "../assets/dollar-1.png"

const Navbar = () => {
    return (
        
         <div className="navbar max-w-[1200px] mx-auto">
          <div className="flex-1">
            <a className="text-xl">
              <img className="w-60px h-50px mt-4" src={navImg} alt="" />
           </a>
          </div>
          <div className="flex items-center gap-1">
          <span className='mr-1'>60000000000</span>
          <span className='mr-1'>Coin</span>
          <img className="w-5 h-5" src={dollarImg} alt="" />
         </div>
       </div>
    );
    
};

export default Navbar;