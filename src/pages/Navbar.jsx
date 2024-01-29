import React from 'react'
//import logo from './images/images.jpg';
//import { FaLessThan } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between'>
        <div>
            <img src='https://magicai.liquid-themes.com/assets/img/logo/magicAI-logo.svg' alt="logo" className='w-30 h-30 ml-7 mt-10'/>
        </div>
        <div>
            <button className='flex flex-row text-1xl mt-10 mr-7'>
                {/* <FaLessThan className='w-4 mt-1 mr-2'/> Back to Home             */}
            </button>
        </div>
        
      
    
    </div>
  )
}

export default Navbar