import ToolCard from '../../../Ui/ToolCard';


const AvailablePremiumTools = ({ premiumToolsData, selectedTools, setSelectedTools, price, setPrice }) => {

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 mt-10 relative'>
            {
                premiumToolsData.map((tool) => {

                    return <ToolCard
                        key={tool.id}
                        tool={tool}
                        selectedTools={selectedTools}
                        setSelectedTools={setSelectedTools}
                        price={price}
                        setPrice={setPrice}>
                    </ToolCard>

                })
            }
        </div>
    );
};

export default AvailablePremiumTools;