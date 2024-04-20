import React, { useState } from 'react';
import logo20 from "../../../image/olimp.png"
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";




const Animation = () => {
  const [leave, setLeave]= useState(false)
    return (
        <div
         id='footer'
        style={{
            margin:"100px 0",
        background:`url(${logo20}) no-repeat center/cover`,
        minHeight:"60vh",
        overflow:"hidden"
        }}>
            <div className="container">
                <div className="flex gap-20 py-5">


                    <div style={{
                      transform: leave? "translatex(0)":"translatex(120%)",
                      transition:"1s"
                    }} className='w-[700px] flex items-center justify-center flex-col text-center h-[500px] bg-[#ffffff17] backdrop-blur-sm rounded-[40px]'>
                  
                  <h1 className=' text-white text-[50px] '>
                    Visit us at our store <br /> in the  <br />{""}
                    <span className='text-white text-[70px] font-black'>
                    Mall of Emirate
                    </span>
                  </h1>
                  <a onClick={() => setLeave(true)} className=' flex items-center justify-center text-white gap-2 text-3xl right-[20px]'>
                    more<FaArrowRightLong />
</a>

                </div>

{/* ////////////////////////////////////// */}

                <div style={{
                transform: leave? "translatex(0)":"translate(120%)",
                transition: "1s"
          
                }} className='w-[700px] flex items-center justify-center flex-col text-center h-[500px] bg-[#000000ad] backdrop-blur-sm rounded-[40px]'>
                    <a onClick={() => setLeave(false)} className=' flex   text-white gap-2 text-3xl' ><MdOutlineKeyboardArrowLeft />more</a>
                

                    <h1 className=' text-white text-[30px] '>
                    We are stationed in one of <br /> the most beautiful and <br /> prestigious malls on this <br /> planet.
  <br />{""}
                    <h2 className='text-white text-[30px] '>
                    Visit us and we will consult you to all our products
                    </h2>
                  </h1>
                    <div className='flex gap-5'>

                    <h1 className='bg-[#5f5a9f] p-[10px]  rounded-[10px]' >Get directions</h1>
                  <h1 className='bg-black p-[10px] text-white rounded-[10px]' >Or buy online</h1>
                    </div>
                </div>



                </div>
                
            </div>
        </div>
    );
};

export default Animation;