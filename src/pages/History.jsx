import React from 'react';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { SparkLine, StockChart,Pie,MyDayPicker } from '../components';
import { dropdownData, SparklineAreaData, recommendStock,ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import { trackedStockData } from '../data/userData'

const History = () => {
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
                        <p className="text-xl font-semibold">History Stock Portfolio</p>
                        {/*<DropDown currentMode={currentMode} />*/}
                        <MyDayPicker currentMode={currentMode} currentColor={currentColor} handleClick={handleClick} isClicked={isClicked} />
                    </div>
                    <div className="mt-10 w-72 md:w-400">
                        {stockportfolio.map((item) => (
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
                    <Pie id="pie-chart" data={stockportfolio} legendVisiblity={false} height="800px" />
                        {/*<StockChart />*/}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default History