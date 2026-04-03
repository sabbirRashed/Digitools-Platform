import React from 'react';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import { FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='footer-section pt-15 md:pt-30 bg-[#101727] text-white pb-8'>
            <div className='footer-content w-11/12 max-w-300 mx-auto'>
                <div className='min-h-20 grid grid-cols-1 lg:grid-cols-5 gap-4'>
                    <div className='space-y-4'>
                        <h2 className='text-3xl md:text-4xl font-bold'>DigiTools</h2>
                        <p className='text-gray-300'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>

                    <ul className='space-y-4'>
                        <h3 className='text-xl font-medium'>Product</h3>
                        <li className='text-gray-300'><a href="">Features</a></li>
                        <li className='text-gray-300'><a href="">Pricing</a></li>
                        <li className='text-gray-300'><a href="">Templates</a></li>
                        <li className='text-gray-300'><a href="">Integrations</a></li>
                    </ul>

                    <ul className='space-y-4'>
                        <li className='text-xl font-medium'>Company</li>
                        <li className='text-gray-300'><a href="">About</a></li>
                        <li className='text-gray-300'><a href="">Blog</a></li>
                        <li className='text-gray-300'><a href="">Careers</a></li>
                        <li className='text-gray-300'><a href="">Press</a></li>
                    </ul>

                    <ul className='space-y-4'>
                        <li className='text-xl font-medium'>Resources</li>
                        <li className='text-gray-300'><a href="">Documentation</a></li>
                        <li className='text-gray-300'><a href="">Help Center</a></li>
                        <li className='text-gray-300'><a href="">Community</a></li>
                        <li className='text-gray-300'><a href="">Contact</a></li>
                    </ul>

                    <div className='space-y-4'>
                        <h2 className='text-xl font-medium'>Social Links</h2>
                        <div className='flex items-center gap-3'>
                            <div className='inline-block rounded-full bg-white border-gray-300 p-2'><BiLogoInstagramAlt className='text-black'/></div>
                            <div className='inline-block rounded-full bg-white border-gray-300 p-2'><FaFacebook className='text-black'/></div>
                            <div className='inline-block rounded-full bg-white border-gray-300 p-2'><FaXTwitter className='text-black'></FaXTwitter></div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col-reverse gap-4 lg:flex-row justify-between mt-10 md:mt-20 text-gray-400'>
                    <p className='text-center lg:left'>© 2026 Digitools. All rights reserved.</p>
                    <div className='flex justify-center lg:justify-start gap-6'>
                        <a href="">Privacy Policy</a>
                        <a href="">Terms of Service</a>
                        <a href="">Cookies</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;