import React, { useEffect } from 'react';
import temir from "../../image/image 34.png"
import iphone from "../../image/iPhone 14 Pro.png"
import logo1 from "../../image/желтый темир.png"
import logo2 from "../../image/серый темир.png"
import logo3 from "../../image/dчерный темир.png"
import "../../styles/Hero.css"
import Order from './Order/Order';
import Work from './Work/Work';
import Namber from './Namber/Namber';
import Contact from './Contact/Contact';
import Animation from './Footer/animation';
import Footer from './Footer/Footer';

const Hero = () => {
    useEffect(() => {
        const temirImage = document.querySelector('.temir-img');
        temirImage.addEventListener('animationiteration', () => {
            document.querySelector('.hero').classList.toggle('change-bg');  
            setTimeout(() => {
                document.querySelector('.hero').classList.toggle('change-bg');  
            }, 2000);  
        });
    }, []);
    

    return (
        <div id='hero'>
            <div className="container">
                <div className="hero">
                    <h1>Smart interface</h1>
                    <div className='h'>
                        <h3>•High quality products</h3>
                        <h3>•Convenient to use</h3>
                    </div>
                    <img src={temir} alt="" className="temir-img" />
                    <img src={iphone} alt="" className="iphone-img" />
                    {/* <div style={{width:"200px"}} className="logotips">
                        <img src={logo1} alt="lkdjbnfkl;sadj" />
                        <img src={logo2} alt="" />
                        <img src={logo3} alt="" />
                    </div> */}
 <Order/>
 
                </div>
                <div>

                <Work/>
                </div>
                <div>                    
                <Namber/>
                </div>
                <div>
                    <Contact/>
                </div>
                <Animation/>
                <Footer/>
            </div>
        </div>
    );
};

export default Hero;
