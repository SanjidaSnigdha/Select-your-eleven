import React from 'react';

const NewsLetter = () => {
    return (
        <div className='w-[980px] h-[280px] rounded-2xl bg-gradient-to-r from-blue-100 via-white-100 to-pink-100 absolute -bottom-665 left-1/2 transform -translate-x-1/2 z-10 mt-8 text-center p-8'>
            <h1 className='font-bold text-[32px] text-[#131313]'>Subscribe to our Newsletter</h1>
            <p className='bg-[#131313]70'>Get the latest updates and news right in your inbox!</p>
             <form>
    <fieldset className="w-80">
      <div className="gap-1 mt-2 flex">
        <input
          type="text"
          placeholder="Enter your email"
          className="input input-bordered" />
        <button className="btn btn-primary bg-gradient-to-l from bg-pink-200 to-orange-200">Subscribe</button>
      </div>
    </fieldset>
  </form> 
            
        </div>
    );
};

export default NewsLetter;