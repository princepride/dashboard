import React from 'react';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { SparkLine, StockChart, Search, SelectingStock } from '../components';
import { dropdownData, SparklineAreaData, recommendStock } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import { trackedStockData } from '../data/userData'
import { FiSearch } from "react-icons/fi";

const DropDown = ({ currentMode }) => (
    <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
        <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
    </div>
);

const Home = () => {

    const { currentColor, currentMode, handleClick, isClicked } = useStateContext();
    const recommendDegree = (num) => {
        if (num >= 1) {
            return <div className='text-md font-bold text-green-400'>{`Hightly Recommend : ${num}`}</div>;
        }
        else if (num >= 0.5) {
            return <div className='text-md font-bold text-yellow-400'>{`Recommend : ${num}`}</div>;
        }
        else {
            return <div className='text-md font-bold text-red-600'>{`Not Recommend : ${num}`}</div>;
        }
    }
    return (
        <div className="mt-12">
            <div className="justify-center right-0 flex ml-96 mr-96 flex-wrap">
                {/*<Search />*/}
                <TooltipComponent content="Want personal advice ? Let's try !" position="BottomCenter">
                    <button
                        type="button"
                        onClick={() => handleClick('selectingStock')}
                        style={{color:(currentMode === 'Dark') && 'white',backgroundColor:currentColor}}
                        className="relative text-xl rounded-full p-3 hover:bg-light-gray dark:hover:bg-[#42464D]"
                    >
                        <div className='flex'>
                            <span
                                className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
                            />
                            <div style={{color:(currentMode === 'Dark') && 'white' }} className="text-sm">
                            Search More
                            </div>
                            <FiSearch />
                        </div>
                    </button>
                </TooltipComponent>
            </div>
            <div className="justify-center">{isClicked.selectingStock && <SelectingStock />}</div>
            <div className="flex flex-wrap lg:flex-nowrap justify-center ">
                <div className="flex m-3 flex-wrap justify-center gap-2 items-center">
                    {recommendStock.map((item) => (
                        <div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 rounded-2xl ">
                            <div className='flex'>
                                <div className="text-md font-semibold">{item.title}</div>
                                <div className="text-sm text-gray-400  mt-1">{` (${item.desc})`}</div>
                            </div>
                            <div>
                                {recommendDegree(item.recommendWeight)}
                            </div>
                            <div className="pt-4">
                                <SparkLine currentColor={currentColor} id={`sparkline-${item.title}`} type="Line" height="60px" width="160px" data={SparklineAreaData} color={currentColor} />
                            </div>
                        </div>

                    ))}
                </div>
            </div>
            <div className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D] justify-center">
                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-2 rounded-2xl">
                    <div className="flex justify-between items-center gap-2">
                        <p className="text-xl font-semibold">Tracked Stocks</p>
                        <DropDown currentMode={currentMode} />
                    </div>
                    <div className="mt-10 w-72 md:w-400">
                        {trackedStockData.map((item) => (
                            <div key={item.title} className="flex justify-between mt-4">
                                <div className="flex gap-4">
                                    <button
                                        type="button"
                                        style={{
                                            color: item.iconColor,
                                            backgroundColor: item.iconBg,
                                        }}
                                        className="text-2xl rounded-lg p-1 hover:drop-shadow-xl"
                                    >
                                        <div className="flex w-10">
                                            <img src={item.icon} />
                                        </div>
                                    </button>
                                    <div>
                                        <p className="text-md font-semibold">{item.title}</p>
                                        <p className="text-sm text-gray-400">{item.desc}</p>
                                    </div>
                                </div>
                                <p className={`text-${item.pcColor}`}>{item.amount}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760">
                    <div className="flex justify-between items-center gap-2 mb-10">
                        <p className="text-xl font-semibold">Market Summary</p>
                    </div>
                    <div className="md:w-full overflow-auto">
                        <StockChart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home