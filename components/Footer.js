import Image from 'next/image';
import React from 'react';
import navbar from '../public/assets/navbar.png';

const Footer = () => {
  return (
    <div className='bg-[#0d1117] items-center justify-center
    border-t border-gray-500 md:p-10 p-5 flex gap-5 xl:flex-row flex-col-reverse'>
        <div className='flex space-x-1 items-center'>
            <div className="h-[32px] w-[32px] mr-2">
                <Image src={navbar} className="object-contain" alt="navbarImage" />
            </div>
            <p> © 2022 Github, Inc.</p>
        </div>
        <div className='flex space-x-3 justify-center flex-wrap'>
            <p className='cursor-pointer hover:underline text-blue-400 text-[0.9rem]'>Terms</p>
            <p className='cursor-pointer hover:underline text-blue-400 text-[0.9rem]'>Privary</p>
            <p className='cursor-pointer hover:underline text-blue-400 text-[0.9rem]'>Security</p>
            <p className='cursor-pointer hover:underline text-blue-400 text-[0.9rem]'>Status</p>
            <p className='cursor-pointer hover:underline text-blue-400 text-[0.9rem]'>Docs</p>
            <p className='cursor-pointer hover:underline text-blue-400 text-[0.9rem]'>Contact Github</p>
            <p className='cursor-pointer hover:underline text-blue-400 text-[0.9rem]'>Pricing</p>
            <p className='cursor-pointer hover:underline text-blue-400 text-[0.9rem]'>API</p>
            <p className='cursor-pointer hover:underline text-blue-400 text-[0.9rem]'>Training</p>
            <p className='cursor-pointer hover:underline text-blue-400 text-[0.9rem]'>Blog</p>
            <p className='cursor-pointer hover:underline text-blue-400 text-[0.9rem]'>About</p>
        </div>
    </div>
  )
}

export default Footer