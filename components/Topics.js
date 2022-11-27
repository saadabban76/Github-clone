import React from 'react';

const Topics = () => {

    const buttons = ['Explore','Topics','Trending','Collections',
    'Events','Github Sponsors'];
  return (
    <div className='xl:w-[70vw] xl:mx-auto xl:mr-[400px] bg-[#0d1117] flex p-2 px-16 justify-between items-center'>
        <div className='xl:ml-[300px] md:w-auto md:mx-0 w-max md:text-[1rem] text-[0.8rem]  flex gap-4'>
            {buttons.map(btn=>(
                <button key={btn}
                 className='focus:border-b-2 focus:border-blue-500 text-gray-400 py-4'>{btn}</button>
            ))}
        </div>
        {/* right */}
        <div className="md:block hidden focus:outline-none  bg-gray-800 text-white border border-gray-500 h-max rounded-[0.3rem]">
          <button className="p-2 text-[0.9rem] font-bold px-4 text-gray-200">Get email updates</button>
        </div>
    </div>
  )
}

export default Topics