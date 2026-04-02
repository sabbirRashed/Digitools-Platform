import React from 'react';
import RocketImage from '../../assets/rocket.png'
const StartCard = () => {
    return (
        <div className=' p-6 py-20 border rounded-lg bg-white border-gray-200 space-y-4 relative'>
            <div className='w-10 h-10 flex justify-center items-center rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white absolute top-2 right-2'>
                <span>01</span>
            </div>
            <div className='inline-block rounded-full  bg-purple-300 p-5'>
                <img className='mx-auto w-full' src={RocketImage} alt="" />
            </div>
            <h2 className='text-xl sm:text-2xl font-bold'>Start Creating</h2>
            <p className='text-sm sm:text-[1rem] text-[#627382]'>Download and start using your premium tools immediately.</p>
        </div>
    );
};

export default StartCard;