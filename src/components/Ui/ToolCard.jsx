import React, { useState } from 'react';
import PremiumToolFeature from './PremiumToolFeature';
import { toolIcons } from '../../toolsIcon';
import { IoCheckmarkSharp } from 'react-icons/io5';


const ToolCard = ({ tool, selectedTools, setSelectedTools }) => {
    const [isBuy, setIsBuy] = useState(false);

    const handleSelectedTools = (tool) => {
        setSelectedTools([...selectedTools, tool]);
        setIsBuy(true)
    }

    return (
        <div
            className="card bg-base-100 shadow border border-[#F2F2F2] p-6 space-y-6">

            <div className={`rounded-full absolute top-2 right-2
                            ${tool.tagType === "popular"
                    ? "bg-[#E1E7FF]"
                    : ""
                }`}>
                <span
                    className={`text-sm font-medium px-3 py-1.5 inline-block w-fit rounded-full 
                            ${tool.tagType === "popular"
                            ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'
                            : tool.tagType === "best-seller"
                                ? "text-[#BB4D00] bg-amber-100"
                                : tool.tagType === "new"
                                    ? "text-[#0A883E] bg-[#DBFCE7]"
                                    : ""
                        }`}>
                    {tool.tag}
                </span>
            </div>

            <div className='w-15 h-15 border border-[#F2F2F2] rounded-full flex justify-center items-center p-3'>
                <img className='w-full h-full' src={toolIcons[tool.icon]} alt={tool.name} />
            </div>

            <h2 className='text-2xl font-bold text-[#101727]'>{tool.name}</h2>

            <p className=' text-[#627382]'>{tool.description}</p>

            <p className='text-2xl font-bold'>${tool.price}<span className='text-[1rem] font-medium text-[#627382]'>/{tool.period}</span></p>

            <ul className='space-y-1'>
                {
                    <PremiumToolFeature features={tool.features}></PremiumToolFeature>
                }
            </ul>
            <button
                key={tool.id}
                onClick={() => { handleSelectedTools(tool) }}
                className={`btn text-white rounded-[1000px]  ${isBuy ? " bg-green-500" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:from-[#6C5BFF] hover:to-[#B23CFF]"}`}>
                {isBuy ?
                    (<>
                        <IoCheckmarkSharp></IoCheckmarkSharp> Added to curt
                    </>)
                    : ("Buy Now")
                }
            </button>
        </div>
    );
};

export default ToolCard;