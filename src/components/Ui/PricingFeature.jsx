import React from 'react';

const PricingFeature = ({pricingName, features}) => {
    return (
        <>
            {
                features.map((feature, index) => {
                    return <li
                        key={index}
                        className={`font-medium text-sm sm:text-[1rem] ${
                            pricingName === "Pro"
                            ? "text-white"
                            : "text-[#627382]"
                        }`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>{feature}</span>
                    </li>
                })
            }
        </>
    );
};

export default PricingFeature;