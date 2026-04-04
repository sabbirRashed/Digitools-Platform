import React from 'react';

const Workflow = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className='w-11/12 mx-auto py-15 md:py-30  text-white text-center space-y-4'>
                <h2 className='text-3xl md:text-5xl font-bold'>Ready to Transform Your Workflow?</h2>
                <p className='text-sm md:text-[1rem] max-w-140 mx-auto'>Join thousands of professionals who are already using Digitools to work smarter.Start free trial today.</p>
                <div className='flex justify-center gap-2 mt-10'>
                    <button className='btn rounded-full shadow-none text-[#9514FA]'><a href="#products">Explore Products</a></button>
                    <button className='btn rounded-full bg-transparent shadow-none text-white hover:bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:text-white'><a href="#pricing">View Pricing</a></button>
                </div>
                <p className='text-sm md:text-[1rem]'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default Workflow;