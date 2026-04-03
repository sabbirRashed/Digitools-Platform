import React from 'react';
import CreateAcountCard from '../../Ui/CreateAcountCard';
import ChooseProductCard from '../../Ui/ChooseProductCard';
import StartCard from '../../Ui/StartCard';

const Step = () => {
    return (
        <div className='bg-gray-50 py-20 md:py-30'>
            <div className='w-11/12 max-w-300 mx-auto text-center space-y-4'>
                <h2 className='text-3xl md:text-5xl font-bold text-[#101727]'>Get Started in 3 Steps</h2>
                <p className='text-[#627382] text-sm md:text-[1rem] max-w-140 mx-auto'>Start using premium digital tools in minutes, not hours.</p>

                {/* step cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
                    <CreateAcountCard></CreateAcountCard>
                    <ChooseProductCard></ChooseProductCard>
                    <StartCard></StartCard>
                </div>
            </div>
        </div>
    );
};

export default Step;