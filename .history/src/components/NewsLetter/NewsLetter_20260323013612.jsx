import React from 'react';

const NewsLetter = () => {
    return (
        <div className='w-[550px] h-[200px] rounded-2xl bg-black absolute -bottom-10 left-1/2 transform -translate-x-1/2 z-10'>
            <h1 className='font-bold text-[32px] text-[#131313]'>Subscribe to our Newsletter</h1>
            <p className='bg-[#131313]70'>Get the latest updates and news right in your inbox!</p>
             <form>
    <h6 className="text-[#FFFFFF] font-semibold text-[18px]">Subscribe</h6>
    <p className='text-[#FFFFFF]/60'>Subscribe to our newsletter for the latest updates.</p>
    <fieldset className="w-80">
      <div className="join mt-2">
        <input
          type="text"
          placeholder="Enter your email"
          className="input input-bordered join-item" />
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form> 
            
        </div>
    );
};

export default NewsLetter;