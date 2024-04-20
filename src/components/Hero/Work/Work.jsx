import React, { useEffect, useState } from 'react';
import logo8 from "../../../image/Group 448.png"
import logo9 from "../../../image/Add details.png"
import logo11 from "../../../image/Go share.png"
import logo12 from "../../../image/iPhone 12 Pro (Wooden Hands).png"
import logo13 from "../../../image/Hand,L.png"

import "./Work.css"
const Work = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {

  const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
    return (
        <div id="work">
            <div className="container"> 
            <div className="flex items-start justify-between text-center">
                <div className="work">
                    <h1 style={{fontSize:"89px", color:"white"}}>How it works</h1>
                <div className="flex items-center justify-between  gap-16" >
                    <img src={logo8} alt="" />
                    <img src={logo9} alt="" />
                    <img src={logo11} alt="" />
                </div>
                </div>
                <div className="texth1">
                    <h1 className='list-decimal	text-white mt-10 '>Choose your design & personalize with your own <br /> 
                    company logo. The logo will be engraved into the <br /> 
                    metal card.</h1>
                </div>
            </div>
            {/*начало  */}
            <div className="flex justify-between">

           <div style={{height: '100%',}} className="bigText">
                <h1 className='FOOCK'>FAQ</h1>
               <details>
                <summary> ▪️ How to customize the card?</summary>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                   Doloremque ab, similique voluptates nostrum eligendi accusantium, 
                   eius quos ullam praesentium est dolore dolorem exercitationem repudiandae
                    quo dolor veritatis. Quae, veniam molestias!</p>
               </details>
               <details>
                 <summary> ▪️ How to use a cards and what we can add?</summary>
                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                   Doloremque ab, similique voluptates nostrum eligendi accusantium, 
                   eius quos ullam praesentium est dolore dolorem exercitationem repudiandae
                    quo dolor veritatis. Quae, veniam molestias!</p>
               </details>
               <details>
                 <summary> ▪️ How to share with my card?</summary>
                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                   Doloremque ab, similique voluptates nostrum eligendi accusantium, 
                   eius quos ullam praesentium est dolore dolorem exercitationem repudiandae
                    quo dolor veritatis. Quae, veniam molestias!</p>
               </details>
               <details> 
                 <summary> ▪️ Any additional chages?</summary>
                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                   Doloremque ab, similique voluptates nostrum eligendi accusantium, 
                   eius quos ullam praesentium est dolore dolorem exercitationem repudiandae
                    quo dolor veritatis. Quae, veniam molestias!</p>
               </details>
               <details>
                 <summary> ▪️ How long does delivery take?</summary>
                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                   Doloremque ab, similique voluptates nostrum eligendi accusantium, 
                   eius quos ullam praesentium est dolore dolorem exercitationem repudiandae
                    quo dolor veritatis. Quae, veniam molestias!</p>
               </details>
               <details>
                 <summary> ▪️ Is there a product warranty?</summary>
                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                   Doloremque ab, similique voluptates nostrum eligendi accusantium, 
                   eius quos ullam praesentium est dolore dolorem exercitationem repudiandae
                    quo dolor veritatis. Quae, veniam molestias!</p>
               </details>
               <details>
                 <summary> ▪️ What is privacy policy?</summary>
                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                   Doloremque ab, similique voluptates nostrum eligendi accusantium, 
                   eius quos ullam praesentium est dolore dolorem exercitationem repudiandae
                    quo dolor veritatis. Quae, veniam molestias!</p>
               </details>
                </div>

                <div className=" relative">
            <div className=" w-[650px]  mr-[-100px]">
              <img src={logo12} alt="img" />
              <div className=" absolute top-[250px] right-[100px]  w-[200]" style={{
               marginTop: scrollPosition < 1850 ? "100%" : "0px",
               transition: "1s"
              }}>
                <img src={logo13} alt="img" />
              </div>
            </div>
          </div>
       </div>
       {/* конец */}

           </div>
        </div>
    );
};

export default Work;