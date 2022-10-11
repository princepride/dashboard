import React from 'react';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { SparkLine, StockChart,Pie,MyDayPicker } from '../components';
import { dropdownData, SparklineAreaData, recommendStock,ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import { trackedStockData } from '../data/userData'


const PickDayButton = ({ currentMode,currentColor,handleClick, isClicked }) => (
    <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
        {/*<button type='button'></button>*/}
        <MyDayPicker/>
    </div>
);

const Home = () => {

    const { currentColor, currentMode, handleClick, isClicked,stockportfolio,setStockportfolio } = useStateContext();
    console.log(stockportfolio);
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
            <div className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D] justify-center">
                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-2 rounded-2xl">
                    <div className="flex justify-between items-center gap-2">
                        <p className="text-xl font-semibold">Tracked Stocks</p>
                        {/*<DropDown currentMode={currentMode} />*/}
                        {/*<MyDayPicker currentMode={currentMode} currentColor={currentColor} handleClick={handleClick} isClicked={isClicked} />*/}
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
                    <div className="flex justify-between items-center gap-2">
                        <p className="text-xl font-semibold">Market Summary</p>
                    </div>
                    <div className="md:w-full overflow-auto">
                    <Pie id="pie-chart" data={stockportfolio} legendVisiblity={false} height="400px" />
                        {/*<StockChart />*/}
                    </div>
                </div>
            </div>
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
        </div>
    )
}

export default Home