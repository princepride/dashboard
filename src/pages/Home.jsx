import React,{useState,useEffect} from 'react';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { SparkLine, StockChart,Pie,MyDayPicker } from '../components';
import { dropdownData, SparklineAreaData, recommendStock,getStockportfolio } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import { trackedStockData } from '../data/userData';


const PickDayButton = ({ currentMode,currentColor,handleClick, isClicked }) => (
    <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
        {/*<button type='button'></button>*/}
        <MyDayPicker/>
    </div>
);

const Home = () => {

    const { currentColor, currentMode, handleClick, isClicked} = useStateContext();
    const [todayStockportfolio,setTodayStockportfolio ] = useState(getStockportfolio("2022-08-22"));
    const recommendDegree = (num) => {
        if (num >= 0.2) {
            return <div className='text-md font-bold text-green-400'>{`Hightly Recommend : ${num}`}</div>;
        }
        else if (num >= 0.1) {
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
                        {todayStockportfolio.map((item) => (
                            <div key={item.x} className="flex justify-between mt-4">
                                <div className="flex gap-4">
                                    <button
                                        type="button"
                                        className="text-2xl rounded-lg p-1 hover:drop-shadow-xl"
                                    >
                                        <div className="flex w-10">
                                            <img src={'https://logo.clearbit.com/investor.fb.com'} />
                                        </div>
                                    </button>
                                    <div>
                                        <p className="text-md font-semibold">{item.x}</p>
                                        <p className="text-sm text-gray-400">{item.x}</p>
                                    </div>
                                </div>
                                {/*<p className={`text-${item.pcColor}`}>{item.amount}</p>*/}
                                <p className={`text-red-600`}>12</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760">
                    <div className="flex justify-between items-center gap-2">
                        <p className="text-xl font-semibold">Market Summary</p>
                    </div>
                    <div className="md:w-full overflow-auto">
                    <Pie id="pie-chart" data={todayStockportfolio} legendVisiblity={false} height="400px" />
                        {/*<StockChart />*/}
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap lg:flex-nowrap justify-center ">
                <div className="flex m-3 flex-wrap justify-center gap-2 items-center">
                    {todayStockportfolio.map((item) => (
                        <div key={item.x} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 rounded-2xl ">
                            <div className='flex'>
                                <div className="text-md font-semibold">{item.x}</div>
                                <div className="text-sm text-gray-400  mt-1">{` (${item.x})`}</div>
                            </div>
                            <div>
                                {recommendDegree(item.y)}
                            </div>
                            <div className="pt-4">
                                <SparkLine currentColor={currentColor} id={`sparkline-${item.x}`} type="Line" height="60px" width="160px" data={SparklineAreaData} color={currentColor} />
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home