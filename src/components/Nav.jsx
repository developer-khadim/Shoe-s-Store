import React from 'react';
import { RiAlignLeft } from "react-icons/ri";
import { RiUserLine } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";

import logo from "../assets/Logo.svg";

const Nav = () => {
  return (
    <nav className='w-full h-[70px] flex justify-center items-center'>
        <div className='w-full max-w-[98%] flex justify-between p-10 relative'>
            <RiAlignLeft size={25} />
            <img src={logo} alt="logo" width={40} className="w-[40px] sm:w-[30px]" />
            <div className='flex gap-3'>
                <RiUserLine size={25} color="white" />
                <IoCartOutline size={25} color="white" />
                <IoSearchOutline size={25} color="white" />
            </div>
        </div>
    </nav>
  )
}

export default Nav