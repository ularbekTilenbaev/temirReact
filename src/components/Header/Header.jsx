import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../image/logo.svg"
import { TbShoppingBagPlus } from "react-icons/tb";


const Header = () => {
    return (
        <div id='header' className='header bg-black sticky top-0 z-[99]' >
        <div className='container'>
            <div className='header'>
                <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent:"space-around",
                alignItems: 'center',
                color:"white",
                    padding:"10px",
                     
                    }} className='pace '>

                    <Link to={"/"}>home</Link>
                    <Link to={"/pro"}>products</Link>
                     <img  style={{width:"60px",borderRadius:"10px"}} src={logo} alt="" />
                    <Link to={"/about"}>about</Link>
                    <Link to={"/con"}>Contact US</Link>
                    <TbShoppingBagPlus style={{fontSize:"25px"}}/>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Header;