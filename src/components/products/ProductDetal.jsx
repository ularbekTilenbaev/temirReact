import React from 'react';
import top from '../../image/Detal/Desktop/image 46.png'
import top2 from '../../image/iPad/iPad/image 47.png'
import top3 from '../../image/Detal/Desktop/image 48.png'
import top4 from "../../image/Descod/Desktop/image 45.png"
import { useDispatch, useSelector } from 'react-redux';

const ProductDetal = () => {
    const { addCarts } = useSelector((state) => state);
    const dispatch = useDispatch();

    const addToCart = (data) => {
        localStorage.setItem("basket", JSON.stringify(addCarts));
        dispatch({ type: "ADD_TO_CART", payload: data });
    };

    return (
        <div id='detal'>
            <div className="container">
                <div className="detal">
                    <h1 style={{ fontFamily: 'Arial, sans-serif', fontSize: '60px', fontWeight: 'bold', color: 'white' }}>Premium Smart Card <br />
                        200 aed
                    </h1>
                    <p className='mt-[50px] text-white text-2xl'>Choose in option</p>
                    <div className='flex items-center justify-center'>
                        <div className='flex items-center justify-center mt-[150px] bg-black p-[10px] w-[700px] flex-wrap rounded-md text-white'>
                            <div>
                                <img src={top} alt="" />
                                <h5>Gold Brushed</h5>
                            </div>
                            <div>
                                <img src={top2} alt="" />
                                <h5>Silver Brushed</h5>
                            </div>
                            <div>
                                <img src={top3} alt="" />
                                <h5>Black Frost</h5>
                            </div>
                        </div>
                        <img src={top4} alt="" />
                    </div>
                </div>
                <div className=' flex flex-col'>
                    <h1 className=' text-white m-[20px] text-1xl'>Name</h1>
                    <input className=' bg-[#2c2a2a] w-[250px]' type="text" placeholder='Insert your name' />
                    <h1 className=' text-white m-[20px] text-1xl'>Company logo</h1>
                    <input className=' bg-[#2c2a2a] w-[250px]' type="text" placeholder='Upload file' />
                    <button onClick={() => addToCart({ name: 'Product Name', price: '200 aed' })} className='w-[150px]'>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetal;
