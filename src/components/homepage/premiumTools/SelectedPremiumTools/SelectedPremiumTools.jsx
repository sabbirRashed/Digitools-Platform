import React from 'react';
import SelectedToolCard from '../../../Ui/SelectedToolCard';

const SelectedPremiumTools = ({ selectedTools, setSelectedTools, price, setPrice }) => {
   
    return (
        <div className='border-2 border-[#F2F2F2] rounded-lg p-6 space-y-6 mt-10'>
            <h2 className='text-2xl font-bold text-[#101727]'>Your Cart</h2>
            <div className='space-y-4'>
                {
                    selectedTools.map(tool => {
                        return <SelectedToolCard
                            key={tool.id}
                            tool={tool}
                            selectedTools={selectedTools}
                            setSelectedTools={setSelectedTools}
                            price={price}
                            setPrice={setPrice}
                        >
                        </SelectedToolCard>
                    })
                }
            </div>
            <div className='flex justify-between items-center'>
                <p className='text-[#627382]'>Total:</p>
                <p className='text-2xl font-bold text-[#101727]'>${price}</p>
            </div>
            <button 
            onClick={()=> {setSelectedTools([])}}
            className='btn p-6 font-extrabold w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full hover:from-[#6C5BFF] hover:to-[#B23CFF]'>Proceed to Checkout</button>
        </div>
    );
};

export default SelectedPremiumTools;