import React from 'react';
import "./Contact.css"

const Contact = () => {
    return (
        <div id='contact'>
            <div className="container">
                <div className='contact'>
                    <h1 style={{fontSize:"55px",color:"white", display:'flex',justifyContent:'center',margin:'20px',fontFamily:'jura'}}>Contact Us</h1>
                    <div className='input'>
                    <div class="relative z-0 w-full mb-5 group">
      <input type="email" name="floating_email" id="floating_email" class="block  py-2.5 px-0 w-[50pc] text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" Full name " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Felix Chan...</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input type="email" name="floating_email" id="floating_email" class="block  py-2.5 px-0 w-[50pc] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" Email" required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your email...</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input type="email" name="floating_email" id="floating_email" class="block  py-2.5 px-0 w-[50pc] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" Message " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter message...</label>
  </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin:"20px"}}>
    <div className='btn'>
      <button className='py-2 px-5 bg-black text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75'>Submit</button>
    </div>
  </div>

                </div>
            </div>
            
        </div>
    );
};

export default Contact;