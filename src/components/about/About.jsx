import React, { useState } from 'react';
import about1 from "../../image/About/image 30.png";
import about2 from "../../image/About/Frame 26.png";
import about3 from "../../image/About/Frame 27.png";
import about4 from "../../image/About/Frame 28.png";
import Footer from '../Hero/Footer/Footer';
import "./About.css"; 

const About = () => {
    const [isHovered, setIsHovered] = useState(false); 

    return (
        <div id='about'>
            <div className="container">
                <div className="flex flex-col items-center justify-center text-center text-white m-[70px]">
                    <h1 style={{ fontFamily: 'Arial, sans-serif', fontSize: '100px', fontWeight: 'bold', color: 'white' }}>TEMIR STORE</h1>
                    <p className='m-[5px] text-1xl'>Temir card-new generation smart business card with <br />
                        more advanced options.</p>
                    <img src={about1} alt="" />
                    <p>You can add your contact details, <br /> social media accounts, pictures <br /> and more  other details and br you can update at any time. <br />
                        No more messing around <br /> with a paper  business cards. One card for life time.</p>
                </div>

                <div className='flex justify-center items-center gap-5'>
                    
                   <div className='p-[10px] bg-white' >
                    <img className='mb-40' src={about2} alt="" />
                    <h1>01</h1>
                    <h2>SMART CARDS</h2>
                    
                </div>

                <div className='p-[10px] text-white  bg-black'onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <img className='mb-40' src={about3} alt="" />
                    <p className={`fade-in ${isHovered ? 'visible' : 'hidden'}`}>
                        You can add your contact details,<br />
                        social media accounts,<br />
                        pictures and more other details and <br />
                        you can update at any time.</p>
                    <h1>02</h1>
                    
                    <h2>SMART CARDS</h2>
                </div>

                <div className='p-[10px] bg-white'>
                    <img className='mb-40' src={about4} alt="" />
                    <h1>03</h1>
                    <h2>SMART CARDS</h2>
                </div>  
                </div>
               
            </div>
            <Footer />
        </div>
    );
};

export default About;
