import React from 'react';
import { TbTriangle } from 'react-icons/tb';
import bannerImage from '../../../assets/banner.png';

const Banner = () => {
    return (
        <div className='w-11/12 max-w-300 mx-auto mt-8 md:mt-15 flex flex-col-reverse md:flex-row justify-between items-center gap-4'>
            <div className='max-w-160 space-y-4'>
                <div className='bg-[#E1E7FF] rounded-[1000px] px-4 py-1 flex items-center gap-1 max-w-73.5 mx-auto md:mx-0'>
                    <div className='w-4 h-4 rounded-full bg-[#c4a3e2] flex justify-center items-center'>
                        <div className='w-3 h-3 rounded-full bg-[#ae75e2] flex justify-center items-center'>
                            <div className='w-1.5 h-1.5 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]'></div>
                        </div>
                    </div>
                    <span className=' bg-clip-text text-transparent bg-linear-to-r from-[#4F39F6] to-[#9514FA] '>New: AI-Powered Tools Available</span>
                </div>
                <h2 className=' text-[#101727] text-4xl md:text-5xl xl:text-7xl/tight font-extrabold text-center md:text-left'>Supercharge Your Digital Workflow</h2>
                <p className=' text-[#627382] max-w-140 text-center md:text-left'>Access premium AI tools, design assets, templates, and productivity
                    software—all in one place. Start creating faster today. <br />
                    Explore Products</p>
                <div className='flex justify-center md:justify-start items-center gap-2 mt-8'>
                    <button className=' btn px-3 py-5 rounded-[1000px] bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white hover:from-[#6C5BFF] hover:to-[#B23CFF] font-semibold'>Explore Products</button>
                    <button className='group btn border border-[#9514FA] px-3 py-5 rounded-[1000px]  bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent hover:text-white hover:bg-clip-border'>
                        <span className='rotate-90 text-[#4F39F6] group-hover:text-white'><TbTriangle /></span>
                        Watch Demo
                    </button>
                </div>
            </div>

            <div>
                <img className='w-full' src={bannerImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;