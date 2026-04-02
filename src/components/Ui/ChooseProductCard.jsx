import React from 'react';
import packageImage from '../../assets/package.png';

const ChooseProductCard = () => {
    return (
        <div className=' p-6 py-20 border rounded-lg bg-white border-gray-200 space-y-4 relative'>
            <div className='w-10 h-10 flex justify-center items-center rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white absolute top-2 right-2'>
                <span>02</span>
            </div>
            <div className='inline-block rounded-full bg-purple-300 p-5'>
                <img className='mx-auto w-full' src={packageImage} alt="" />
            </div>
            <h2 className='text-2xl font-bold'>Choose Products</h2>
            <p className='text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
        </div>
    );
};

export default ChooseProductCard;