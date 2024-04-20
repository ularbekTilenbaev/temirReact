import React from 'react';
import { ImWhatsapp } from "react-icons/im";
import { LuFacebook } from "react-icons/lu";
import { TbBrandYoutube } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import logo90 from "../../../image/image 27.png"
import { useNavigate } from 'react-router-dom';




const Footer = () => {
    return (
        <div>
            <div 
            style={{
             display:"flex",
             gap:"9pc",
             justifyContent:"center",
             alignItems:"center",
             padding:"20px 0",
             width:"100%",
             color:"white",
             fontFamily:"jura",
             fontSize:"30px",
             fontWeight:"bold",
             letterSpacing:"2px",
             
            }} className="gbText">
                <h2>Home</h2>
                <h2>order</h2>
                <h1>TEMIR LLC</h1>
                <h2>about</h2>
                <h2>Contacts</h2>
            </div>
            <div>
                <p className='text-white text-center m-8 text-1xl'>Mall Of Emirates. G-floor. <br /> 
                   Near: Rado, Pandora, Steve <br />
                   Madden</p>
            </div>
            <div className='flex items-center justify-center text-3xl gap-5 '>
            <a href='https://api.whatsapp.com/send/?phone=%2B996559692626&text&type=phone_number&app_absent=0' className=' text-white'><ImWhatsapp /></a> 
            <a href='https://www.facebook.com/motionwebllc2021/'  className=' text-white'><LuFacebook /></a>
            <a href='https://www.youtube.com/@motionwebllc683'className='text-white' ><TbBrandYoutube /></a>
            <a href='https://www.instagram.com/motionweb.kg' className='text-white' ><FaInstagram /></a>
            <a href='https://2gis.kg/bishkek/firm/70000001057860881'  className='text-white'><MdLocationPin /></a>

            </div>
            <div className='flex justify-center items-center gap-10 p-5'>
                <h1 className='text-white'>Developed by</h1>
               <a href="https://motion.kg/"> <img  src={logo90} alt="" /></a>
            </div>
            
        </div>
    );
};

export default Footer;