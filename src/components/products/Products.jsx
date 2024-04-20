import React, { useState, useRef } from 'react';
import "./Products.css"
import { data } from '../../data/Data';
import logo35 from '../../image/Temir Store (Copy) (35)/Products/Frame 26085544.png'
import logo36 from '../../image/Temir Store (Copy) (36)/Products/Frame 26085543.png'
import logo37 from '../../image/Temir Store (Copy) (37)/Products/Frame 26085545.png'
import logo38 from '../../image/Temir Store (Copy) (38)/Products/Frame 26085546.png'
import logo39 from '../../image/Temir Store (Copy) (39)/Products/Frame 26085547.png'
import Footer from '../Hero/Footer/Footer';
import { Link } from 'react-router-dom';
import ProductDetal from './ProductDetal';

const Products = () => {
    const [level, setLevel] = useState('');
    const timeoutRef = useRef(null);

    const handleMouseOver = (image) => {
        clearTimeout(timeoutRef.current);
        setLevel(image);
    };

    const handleMouseOut = () => {
        timeoutRef.current = setTimeout(() => {
            setLevel('');
        },2000);
    };

    return (
        <div className="container">
            <div className="flex text-white justify-center items-center text-center w-[100%] h-[50vh] bg-[#ffffff17] backdrop-blur-sm rounded-[40px]">
                {data.map((el) => (
                    <div key={el.image} className={`overflow-hidden h-[400px] ${level === el.image ? "w-[500px]" : "w-[300px]"}`}>
                        <div className=''>
                            <img
                                style={{
                                    transform: level === el.image ? "rotate(0deg)" : "rotate(90deg)",
                                    transition: "0.5s",
                                }}
                                onMouseOver={() => handleMouseOver(el.image)}
                                onMouseOut={handleMouseOut}
                                src={el.image}
                                alt=""
                                className={`${level === el.image ? "rotate-[0deg]" : "rotate-[-90deg]"} scale-[3.5] object-cover mt-[80px] transition-[3s]`}
                            />
                        </div>
                        <div className={`${level === el.image ? "block" : "hidden"}`}>
                            <h1>{el.title}</h1>
                            <p>{el.price}</p>
                           <Link to={"/productdetal"}><button>Add to cart</button></Link> 
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex py-10 items-center justify-center gap-5 mt-10'>
                <img src={logo35} alt="" />
                <img src={logo36} alt="" />
                <img src={logo37} alt="" />
                <img src={logo38} alt="" />
                <img src={logo39} alt="" />
            </div>
            <Footer/>
        </div>
    );
};

export default Products
