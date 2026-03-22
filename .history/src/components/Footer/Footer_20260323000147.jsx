import React from 'react';
import footerImg from "../../assets/logo-footer.png"

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-[#040D11] text-base-content p-10 mt-10 w-full h-[300px]">
            <img src={footerImg} alt="" className='w-2/12 mx-auto'/>
  <div>
    <h6 className="font-semibold text-[18px] text-[#FFFFFF]">About us</h6>
    <p className='text-[#FFFFFF]'>We are a passionate team dedicated to providing the best services to our customers.</p>
   
  </div>
  <nav className='text-[#FFFFFF]'>
    <h6 className="font-semibold text-[18px]">Quick Links</h6>
    <a className="link link-hover">. Home</a>
    <a className="link link-hover">. Services</a>
    <a className="link link-hover">. About</a>
    <a className="link link-hover">. Contact</a>
  </nav>
  
  <form>
    <h6 className="">Subscribe</h6>
    <p className='text-[#FFFFFF]'>Subscribe to our newsletter for the latest updates.</p>
    <fieldset className="w-80">
      <label>Enter your email address</label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item" />
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
    );
};

export default Footer;