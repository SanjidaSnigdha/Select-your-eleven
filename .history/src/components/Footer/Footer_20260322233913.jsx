import React from 'react';
import footerImg from "../../assets/logo-footer.png"

const Footer = () => {
    return (
        <div className='w-11/12 mx-auto h-[300px] bg-[#121F5E]'>
            <img src={footerImg} alt="" />
        </div>
    );
};

export default Footer;