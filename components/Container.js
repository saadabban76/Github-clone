import Image from 'next/image'
import React from 'react';
import {VscTelescope} from 'react-icons/vsc';
import {RiGitRepositoryLine} from 'react-icons/ri';
import {AiOutlineStar} from 'react-icons/ai';
import {IoMdArrowDropdown} from 'react-icons/io';


const Container = ( {code,star,image, btns,name} ) => {

    const buttons = [];

    if(typeof(btns) == 'object') {
        btns.map(item=>buttons.push(item));
    }
  return (
    <div className=''>
            <div className='flex rounded-b-[0.4rem] border-gray-700 border flex-col w-[516px]'>
            {/* image */}
            <div className=''>
                <Image 
                src={image} 
                alt='image'
                className='rounded-t-[0.4rem] w-full h-full' />
            </div>
            {/* middle part */}
            <div className='bg-[#161b22] px-5 pt-5 flex flex-col gap-7'>
                <div className='flex gap-3 text-gray-400 font-semibold text-[0.9rem]'>
                    <VscTelescope className='text-[1.2rem]' />
                    <p className=''>Trending repository</p>
                </div>

                <div className='flex w-full items-center justify-between'>
                    <div className='flex items-center space-x-3'>
                        <RiGitRepositoryLine className='text-gray-400 text-[1.2rem]' />
                        <p className='text-[1.2rem] text-blue-400 cursor-pointer'>{name}</p>
                    </div>
                    <div className='flex items-center space-x-3 border border-gray-800  text-gray-400 text-[0.8rem]'>
                        <div className=''>
                        <AiOutlineStar className=' text-[1.2rem]'/>
                        </div>
                        <p>Star </p>
                        <p className='bg-gray-700 p-[0.1rem] rounded-[1.3rem] font-semibold'>{star}</p>
                        <button className='p-2 rounded-l-[0.7rem]'>
                            <IoMdArrowDropdown className='text-[1.2rem]' />
                        </button>
                    </div>
                </div>
                {/* topics */}

                <div className='flex border-b border-b-gray-700 items-center space-x-3 text-gray-400 '>
                    <p className='bg-[#0d1117] p-1 text-center border-b-[#0d1117] border-b'>Code</p>
                    <p>Issues</p>
                    <p>Pull requests</p>
                    <p>Discussions</p>
                </div>
            </div>

            {/* code details */}

            <div className='p-4 text-[0.9rem] text-gray-300'>
                <p>{code}</p>
            </div>
            {/* buttons */}
            <div className='w-full border-b-gray-700 border-b flex-wrap p-4 text-blue-300 flex gap-1 gap-y-2'>
            
                {buttons.map((item,i)=>(
                <p key={i} className='bg-[#13233a] px-2 rounded-[0.7rem]'>{item}</p>
                ))}
            </div>
            {/* updated history */}
            <div className='p-4 flex text-gray-400 text-[0.9rem] space-x-8'>
                <p>Updated 2 hours ago</p>
                <div className='flex space-x-1'>
                    <p className='px-2 bg-blue-400 rounded-full'></p>
                    <p>Javascript</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Container