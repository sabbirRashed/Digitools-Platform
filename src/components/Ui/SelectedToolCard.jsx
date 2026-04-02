import React from 'react';
import { toolIcons } from '../../toolsIcon';
import { toast } from 'react-toastify';

const SelectedToolCard = ({ tool, selectedTools, setSelectedTools, price, setPrice }) => {

    const handleTools = () => {
        const filteredSelectedTools = selectedTools.filter(selectedtool => selectedtool.name !== tool.name);

        setSelectedTools(filteredSelectedTools)
        setPrice(price-tool.price)
        toast.success("Item removed successfully");
    }
    return (
        <div className='bg-[#F9FAFC] border border-gray-100 p-5 rounded-xl flex justify-between items-center'>
            <div className='flex items-center gap-2 sm:gap-4'>
                <div className='bg-white w-10 sm:w-15 h-10 sm:h-15 border border-gray-200 rounded-full flex justify-center items-center p-2 sm:p-3'>
                    <img className='w-full h-full' src={toolIcons[tool.icon]} alt={tool.name} />
                </div>
                <div className='space-y-1'>
                    <h2 className='text-[1rem] sm:text-lg font-semibold text-[#101727]'>{tool.name}</h2>
                    <p className='text-sm sm:text-[1rem] font-medium text-[#627382]'>${tool.price}</p>
                </div>
            </div>

            <button
                onClick={() => { handleTools() }}
                className='btn text-[#FF3980] rounded-full border-none shadow-none p-0 sm:px-2 text-[12px] sm:text-[1rem]'>
                Remove
            </button>
        </div>
    );
};

export default SelectedToolCard;