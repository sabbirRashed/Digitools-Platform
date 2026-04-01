import React, { useState } from 'react';

const PremiumTools = () => {

    const [selectedTab, setSelectedTab] = useState('products');

    return (
        <div className='w-11/12 max-w-300 mx-auto border my-20 md:my-30'>
            {/* content box */}
            <div className='text-center space-y-4'>
                <h2 className='text-5xl font-bold text-[#101727]'>Premium Digital Tools</h2>
                <p className='text-[#627382] max-w-140 mx-auto'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>

                <div className='border border-[#ece6e6] p-1 inline-block rounded-[1000px]'>
                    <button
                        onClick={() => { setSelectedTab('products') }}
                        className={`btn p-6 rounded-[1000px] 
                            ${selectedTab === 'products'
                                ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white hover:from-[#6C5BFF] hover:to-[#B23CFF]'
                                : ''}
                    `}>
                        Products
                    </button>

                    <button
                        onClick={() => { setSelectedTab('cart') }}
                        className={`btn p-6 rounded-[1000px] 
                            ${selectedTab === 'cart'
                                ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white hover:from-[#6C5BFF] hover:to-[#B23CFF]'
                                : ''}
                    `}>
                        Cart (0)
                    </button>
                </div>
            </div>


            {/* cards container */}
            <div>

            </div>
        </div>
    );
};

export default PremiumTools;