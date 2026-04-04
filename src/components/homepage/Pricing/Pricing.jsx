import React, { use } from 'react';
import PricingCard from '../../Ui/PricingCard';

const Pricing = ({pricingPromise}) => {
    const pricingData = use(pricingPromise);

    return (
        <div id='pricing' className='w-11/12 max-w-300 mx-auto space-y-4 my-20 md:my-30'>
            <h2 className='text-3xl md:text-5xl font-bold text-[#101727] text-center'>Simple, Transparent Pricing</h2>
            <p className='text-[#627382] text-sm md:text-[1rem] max-w-140 mx-auto text-center'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

            {/* step cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
                {
                    pricingData.map((pricing, index) =>{
                        return <PricingCard key={index} pricing={pricing}></PricingCard>
                    })
                }
            </div>
        </div>
    );
};

export default Pricing;