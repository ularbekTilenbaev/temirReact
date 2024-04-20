import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import logo5 from "../../../image/Group 484.png"
import logo6 from "../../../image/Group 481.png"
import logo7 from "../../../image/Frame 27.png"

const Order = () => {
    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });

        window.addEventListener('mousemove', handleMousemove);

        return () => {
            window.removeEventListener('mousemove', handleMousemove);
        };
    }, []);

    const handleMousemove = () => {
        AOS.refresh();
    };

    return (
        <div className='py-[20px]'>
            <div className="container">
                <div className="flex items-start justify-between gap-[15pc]">
                    <h1 className='text-white text-[60px] leading-[65px] font-black'>
                        Умный способ <br /> оставаться <br /> на связи</h1>
                    <p className='text-white text-[25px] font-extralight'
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        Цифровые визитные карточки - современный <br /> способ обмена контактной информацией.
                        Цифровые визитные карточки <br /> более интерактивны, экономичны и экологичны
                        по сравнению с их физическими аналогами. <br /> Одним из главных преимуществ
                        цифровых визитных карточек <br /> является то, что их можно обменивать с кем угодно, где угодно.</p>
                </div>

                <div className="flex items-center justify-center py-[20px]">
                    <img src={logo5} alt="lkdjbnfkl;sadj" data-aos="fade-right" style={{ marginRight: '20px' }} />
                    <img src={logo6} alt="lkdjbnfkl;sadj" data-aos="zoom-in" style={{ width: '300px', height: '330px', objectFit: 'cover' }} />
                    <img src={logo7} alt="lkdjbnfkl;sadj" data-aos="fade-left" style={{ marginLeft: '20px' }} />
                </div>

                <center>
                    <button className='py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75 mt-10'>Order</button>
                </center>
            </div>
        </div>
    );
};

export default Order;
