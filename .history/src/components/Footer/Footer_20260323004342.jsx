import React from 'react';
import footerImg from "../../assets/logo-footer.png"

const Footer = () => {
    return (
        <footer className="bg-[#040D11] text-base-content p-10 mt-10 w-full h-[300px]">
            {/* Footer Image */}
            <div className='flex justify-center mb-8'>
            <img src={footerImg} alt="" className='w-20 h-20'/>
            </div>
   <div className='flex flex-col md:flex-row justify-between gap-8'>
    <div>
    <h6 className="font-semibold text-[18px] text-[#FFFFFF]">About us</h6>
    <p className='mt-2 text-[#FFFFFF]'>We are a passionate team<br></br>dedicated to providing the best <br></br> services to our customers.</p>
   
  </div>
  <div className='text-[#FFFFFF]'>
    <h6 className="font-semibold text-[18px]">Quick Links</h6>
    <div className='flex flex-col mt-2 gap-1'>
    <a className="link link-hover">. Home</a>
    <a className="link link-hover">. Services</a>
    <a className="link link-hover">. About</a>
    <a className="link link-hover">. Contact</a>
    </div>
  </div>
  
  <form>
    <h6 className="text-[#FFFFFF] font-semibold text-[18px]">Subscribe</h6>
    <p className='text-[#FFFFFF]'>Subscribe to our newsletter for the latest updates.</p>
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
  <p>@2024 Your Company All Rights Reserved.</p>
  </div>
</footer>
    );
};

export default Footer;