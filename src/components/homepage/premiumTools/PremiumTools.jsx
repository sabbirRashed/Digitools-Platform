import React, { use, useState } from 'react';
import AvailablePremiumTools from './availablePremiumTools/AvailablePremiumTools';
import SelectedPremiumTools from './SelectedPremiumTools/SelectedPremiumTools';

const PremiumTools = ({ premiumToolsPromise, selectedTools, setSelectedTools }) => {

    const premiumToolsData = use(premiumToolsPromise);
   
    const [selectedTab, setSelectedTab] = useState('products');
    const [price, setPrice] = useState(0);


    return (
        <div id='products' className=' max-w-300 mx-auto my-20 md:my-30'>

            {/* content box */}
            <div className='w-11/12 mx-auto text-center space-y-4'>
                <h2 className='text-3xl md:text-5xl font-bold text-[#101727]'>Premium Digital Tools</h2>
                <p className='text-[#627382] text-sm md:text-[1rem] max-w-140 mx-auto'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>


                <div className='border border-[#ece6e6] p-1 inline-block rounded-[1000px] bg-white'>
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
                        Cart ({selectedTools.length})
                    </button>
                </div>
            </div>


            {/* cards container */}
            <div className=' bg-white p-6 rounded-xl mt-10 border border-gray-100'>
                {
                    selectedTab === 'products'
                        ? <AvailablePremiumTools
                            premiumToolsData={premiumToolsData}
                            selectedTools={selectedTools}
                            setSelectedTools={setSelectedTools}
                            price={price}
                            setPrice={setPrice}

                        >
                        </AvailablePremiumTools>
                        : <SelectedPremiumTools
                            selectedTools={selectedTools}
                            setSelectedTools={setSelectedTools}
                            price={price}
                            setPrice={setPrice}
                        >
                        </SelectedPremiumTools>

                }
            </div>
        </div>
    );
};

export default PremiumTools;