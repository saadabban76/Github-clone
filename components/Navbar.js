import Image from "next/image";
import React from "react";
import navbar from "../public/assets/navbar.png";
import { BiMenu } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import {IoCodeSlashOutline} from 'react-icons/io5';




const Navbar = () => {

  return (
    <div className="bg-[#161b22] ">

      <div className="xl:w-[55vw] xl:mx-auto px-5 py-5 flex justify-between items-center">
        {/* Left */}
        <div className="block md:hidden text-white border border-gray-500 h-max rounded-[0.3rem]">
          <button className="p-1 px-3 text-[0.8rem]">Sign up</button>
        </div>

        <div className="hidden md:flex items-center gap-4 text-white">
        <div className="h-[42px] w-[42px] mr-5">
          <Image src={navbar} className="cursor-pointer object-contain" alt="navbarImage" />
        </div>
           <div className="flex cursor-pointer gap-1 items-center">
                <p>Product</p>
                <MdKeyboardArrowDown className="text-gray-500"/>
           </div>
           <div className="flex cursor-pointer gap-1 items-center">
                <p>Solutions</p>
                <MdKeyboardArrowDown className="text-gray-500"/>
           </div>
           <div className="flex cursor-pointer gap-1 items-center">
                <p>Open Source</p>
                <MdKeyboardArrowDown className="text-gray-500"/>
           </div>
           <div className="flex cursor-pointer gap-1">
                <p>Pricing</p>
                {/* <MdKeyboardArrowDown className="text-gray-500"/> */}
           </div>
        </div>
        {/* middle */}
        {/* on mobile */}
        <div className="block md:hidden h-[35px] w-[35px]">
          <Image src={navbar} className="object-contain" alt="navbarImage" />
        </div>
        {/* on Desktop */}
        <div className="md:flex hidden relative rounded-[1rem]  border-gray-700">
            <input  
            type='text' 
            placeholder=" Search Github"
            className="focus:outline-none border-white bg-[#0d1117] p-1 w-[240px] text-white" />
            <IoCodeSlashOutline className="absolute text-[1.2rem] right-3 text-gray-400 top-2" />
        </div>
        {/* right */}
        {/* on mobile */}
        <div className="md:hidden block">
          <BiMenu className="text-[1.8rem] text-white" />
        </div>
        {/* on desktop */}
        <div className="md:flex hidden items-center gap-4 text-white">
            <p className="cursor-pointer">Sign in</p>
            <button className="rounded-[0.3rem] border border-gray-600 p-1 px-3 ">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
