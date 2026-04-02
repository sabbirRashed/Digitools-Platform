import React from 'react';
import SelectedToolCard from '../../../Ui/SelectedToolCard';
import { TbShoppingCartOff } from 'react-icons/tb';
import { toast } from 'react-toastify';

const SelectedPremiumTools = ({ selectedTools, setSelectedTools, price, setPrice }) => {

    const handleCheckoutBtn = ()=>{

        toast.success("Great! Let's complete your purchase.");
        setSelectedTools([])
    }
    return (
        <>
            {
                selectedTools.length === 0
                    ? <div className='border border-gray-200 rounded-lg p-15 text-center bg-gray-50'>
                        <div className='flex justify-center items-center'>
                            <TbShoppingCartOff className='text-6xl text-[#627382]'/>
                        </div>
                        <h2 className='text-2xl md:text-4xl font-bold text-[#101727] mt-6'>Your cart is empty!</h2>
                        <p className='text-sm text-[1rem] font-medium text-[#627382] mt-3'>Your selected items will appear here after you add them to your cart.</p>
                    </div>
                    : <div className=' rounded-lg p-0 sm:p-6 space-y-6'>
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
                            <p className='text-lg sm:text-2xl font-bold text-[#101727]'>${price}</p>
                        </div>
                        <button
                            onClick={() => { handleCheckoutBtn() }}
                            className='btn p-6 font-extrabold w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full hover:from-[#6C5BFF] hover:to-[#B23CFF]'>Proceed to Checkout</button>
                    </div>

            }
        </>
    );
};

export default SelectedPremiumTools;