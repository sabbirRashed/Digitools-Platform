import React from 'react';
import {toolIcons} from '../../toolsIcon';

const SelectedToolCard = ({tool, selectedTools, setSelectedTools}) => {
    return (
        <div className='bg-[#F9FAFC] p-5 rounded-xl flex justify-between items-center'>
            <div className='flex items-center gap-4'>
                <div className='bg-white w-15 h-15 border border-[#F2F2F2] rounded-full flex justify-center items-center p-3'>
                    <img className='w-full h-full' src={toolIcons[tool.icon]} alt={tool.name} />
                </div>
                <div className='space-y-1'>
                    <h2 className='text-lg font-semibold text-[#101727]'>{tool.name}</h2>
                    <p className='font-medium text-[#627382]'>${tool.price}</p>
                </div>
            </div>

            <button className='btn text-[#FF3980] rounded-full border-none shadow-none'>
                Remove
            </button>
        </div>
    );
};

export default SelectedToolCard;