import React from 'react';

const NewsLetter = () => {
    return (
        <div className='w-[980px] h-[280px] rounded-2xl bg-gradient-to-r from-blue-100 via-white-100 to-pink-100 -mt-30 mx-auto items-center text-center p-8'>
            <h1 className='font-bold text-[32px] text-[#131313] mt-3'>Subscribe to our Newsletter</h1>
            <p className='bg-[#131313]70 mt-3'>Get the latest updates and news right in your inbox!</p>
             <form>
    <fieldset className="w-80 mx-auto mt-3">
      <div className="gap-1 mt-2 flex">
        <input
          type="text"
          placeholder="Enter your email"
          className="input" />
        <button className="btn btn-primary bg-gradient-to-l border-none from bg-yellow-200 to-orange-300 text-[#131313] font-bold">Subscribe</button>
      </div>
    </fieldset>
  </form> 
            
        </div>
    );
};

export default NewsLetter;