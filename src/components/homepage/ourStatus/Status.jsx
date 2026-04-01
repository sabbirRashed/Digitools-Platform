import React from 'react';

const Status = () => {
    return (
        <div className='mt-15 mb-20 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>
            <div className='max-w-300 mx-auto p-6 md:p-15 flex justify-around'>
                <div className=' text-center space-y-3'>
                    <p className='text-3xl md:text-6xl font-extrabold'>50K+</p>
                    <p className='text-sm md:text-2xl font-medium'>Active Users</p>
                </div>

                <div className="divider divider-horizontal p-2 before:border  before:border-gray-400 after:border after:border-gray-400"></div>

                <div className='text-center space-y-3'>
                    <p className='text-3xl md:text-6xl font-extrabold'>200+</p>
                    <p className='text-sm md:text-2xl font-medium'>Premium Tools</p>
                </div>

                <div className="divider divider-horizontal p-2 before:border  before:border-gray-400 after:border after:border-gray-400"></div>


                <div className='text-center space-y-3'>
                    <p className='text-3xl md:text-6xl font-extrabold'>4.9</p>
                    <p className='text-sm md:text-2xl font-medium'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Status;