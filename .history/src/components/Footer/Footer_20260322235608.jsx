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
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <form>
    <h6 className="footer-title">Newsletter</h6>
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