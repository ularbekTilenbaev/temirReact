import React, { useEffect, useState } from 'react';
import logo10 from "../../../image/qr code.png"

const Stick = ({ isVisible }) => (
  <div className="stick" style={{ height: isVisible ? '100px' : '0px',
   transition: 'height 1s', borderBottom: '1px solid white', width: '100%',
    position: 'absolute', top: 0, zIndex: 999 }}>
        
    </div>
);

const AnimatedDivs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const scrollPosition = scrollTop + windowHeight;

      const triggerPoint = 0.8;

      if (scrollPosition > triggerPoint * document.body.offsetHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return  <div className="container">
 <div style={{display:'flex',alignItems:"center", justifyContent:"center"}}>
                    <img src={logo10} alt="logo" />
                </div>
    <div style={{ position: 'relative' }}>
      <Stick isVisible={isVisible} />
      <div style={{ paddingTop: isVisible ? '100px' : '0px', transition: 'padding-top 0.5s' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '10pc' }} className='namber'>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', transform: isVisible ? 'translateY(0)' : 'translateY(-100px)', transition: 'transform 1s' }} className="no1">
            <h1 style={{ fontSize: '100px', color: 'white' }}>1</h1>
            <h3 style={{ fontSize: '40px', color: 'white' }}>delivery</h3>
            <p style={{ fontSize: '20px', color: 'white', textAlign: 'center' }}>We deliver right to your <br />
              front door or office. <br /> Free of charge!</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', transform: isVisible ? 'translateY(0)' : 'translateY(-100px)', transition: 'transform 1s' }} className="no2">
            <h1 style={{ fontSize: '100px', color: 'white' }}>2</h1>
            <h3 style={{ fontSize: '40px', color: 'white' }}>High quality</h3>
            <p style={{ fontSize: '20px', color: 'white', textAlign: 'center' }}>We deliver right to your <br />
              front door or office. <br /> Free of charge!</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', transform: isVisible ? 'translateY(0)' : 'translateY(-100px)', transition: 'transform 1s' }} className="no3">
            <h1 style={{ fontSize: '100px', color: 'white' }}>3</h1>
            <h3 style={{ fontSize: '40px', color: 'white' }}>Customer Service</h3>
            <p style={{ fontSize: '20px', color: 'white', textAlign: 'center' }}>We deliver right to your <br />
              front door or office. <br /> Free of charge!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
    

}

export default AnimatedDivs;
