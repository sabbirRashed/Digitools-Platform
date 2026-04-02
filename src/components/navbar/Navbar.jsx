import React, { useState } from 'react';
import { BsCart } from 'react-icons/bs';
import { HiDotsVertical } from 'react-icons/hi';
import { ImCross } from 'react-icons/im';


const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='bg-white opacity-95 shadow-sm sticky top-0 z-10'>
            <div className="navbar p-0 bg-base-100 max-w-300 mx-auto px-7">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden mr-2 p-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow-sm text-[#101727]">
                            <li><a>Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>
                    <a className="text-xl md:text-[1.8rem] font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">DigiTools</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold text-[#101727]">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end items-center gap-2 font-medium">
                    <BsCart />
                    <span
                        onClick={() => { setOpen(!open) }}
                        className='sm:hidden relative'>
                        {
                            open ?
                                <ImCross></ImCross>
                                : <HiDotsVertical></HiDotsVertical>

                        }

                        <ul className={`absolute bg-base-200 p-4 rounded-sm border border-gray-200 duration-800 space-y-1
                                ${open ?
                                'top-8 -right-6' : '-top-40 -right-6'}`
                        }>
                            <li><button className='btn px-9 py-1 rounded-[1000px] bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-[1rem] hover:from-[#6C5BFF] hover:to-[#B23CFF]'>Login</button></li>
                            <li><button className='btn px-3 py-1 rounded-[1000px] bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-[1rem] hover:from-[#6C5BFF] hover:to-[#B23CFF]'>Get Started</button></li>
                        </ul>
                    </span>


                    <div className='sm:flex items-center  hidden'>
                        <button className='btn bg-transparent border-none shadow-none rounded-[1000px] bg-linear-to-r hover:from-[#4F39F6] hover:to-[#9514FA] hover:text-white'>Login</button>
                        <button className='btn px-3 py-5 rounded-[1000px] bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white cursor-pointer hover:from-[#6C5BFF] hover:to-[#B23CFF]'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;