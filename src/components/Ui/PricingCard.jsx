import React, { } from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    
    return (
        <div className={`card  border-gray-200 ${
            pricing.name === "Pro"
            ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
            : "bg-gray-50 border"
        }`}>
            <div className="card-body relative flex flex-col">
                {
                    pricing.name === "Pro"
                    ?<span className="badge badge-xs badge-warning absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-100 text-amber-600 border-none p-3 rounded-full font-semibold">Most Popular</span>
                    : ""
                }
                <div className="">
                    <h2 className="text-xl font-bold">{pricing.name}</h2>
                    <p>{pricing.description}</p>
                </div>

                <div>
                    <h2 className='text-3xl font-bold'>${pricing.price}<span className='text-sm font-medium'>/{pricing.period}</span></h2>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs flex-1">
                    {
                        <PricingFeature 
                        pricingName={pricing.name}
                        features={pricing.features}></PricingFeature>
                    }
                </ul>
                <div className="mt-6 bg-white rounded-full">
                    <button className={`btn btn-block shadow-none rounded-full border-none ${
                        pricing.name === "Pro"
                        ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent"
                        : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-[1rem] hover:from-[#6C5BFF] hover:to-[#B23CFF] rounded-full"
                    }`}>{pricing.btn}</button>
                </div>
            </div>
        </div>
    );
};

export default PricingCard;