import React, { useState, useEffect } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from '../contexts/ContextProvider';
import { SelectingStock, Button, Search, StockChart, MyDayPicker } from '../components';
import { FiSearch } from "react-icons/fi";
import { ecomPieChartData, searchData } from "../data/dummy";
import { Pie } from "../components";
const axios = require("axios");

const Forecast = () => {
  const { currentColor, currentMode, isClicked, selectedStock, setSelectedStock, stockforecast } = useStateContext();

  const getColor = (num) => {
    if (num === 0) {
      return "text-gray-400";
    }
    else if (num > 0) {
      return "text-green-600";
    }
    else {
      return "text-red-600";
    }
  }

  const getNumber = (num) => {
    if (num >= 0) {
      return "+$" + Math.abs(num).toFixed(2);
    }
    else {
      return "-$" + Math.abs(num).toFixed(2);
    }
  }
  const handleClick = () => {
    const value = document.querySelector("#atcelement").ariaLabel;
    console.log(value);
    let symbol = "NONE";
    for (let i = 0; i < searchData.length; i++) {
      if (searchData[i].StockName === value) {

        symbol = searchData[i].symbol;
        break;
      }
    }
    console.log(symbol);
    if (!selectedStock.some(e => e.symbol == symbol)) {
      //setSelectedStock(selectedStock.concat(fetchStockData(symbol)));
      const encodedParams = new URLSearchParams();
      encodedParams.append("symbol", symbol);
      const options = {
        method: 'POST',
        url: 'https://yahoo-finance97.p.rapidapi.com/stock-info',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': '6be3939a73msh413d424fc2d04c4p15ba7bjsnd28f29cebde3',
          'X-RapidAPI-Host': 'yahoo-finance97.p.rapidapi.com'
        },
        data: encodedParams
      };
      axios.request(options).then(function (response) {
        console.log(response.data);
        setSelectedStock(selectedStock.concat(response.data.data));
      }).catch(function (error) {
        console.error(error);
      });
    }
  }
  return (
    <div className="m-4 md:m-4 mt-12 p-4 md:p-4">
      {/*<div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg dark:text-gray-200">Predict the price of a stock for the next two weeks</p>
        </div>
        <Button icon={<MdOutlineCancel />} color="rgb(153, 171, 180)" bgHoverColor="light-gray" size="2xl" borderRadius="50%" />
      </div>*/}
      <div className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D] justify-center">
        <p className="text-3xl font-semibold dark:text-gray-200 dark:bg-secondary-dark-bg w-full p-4 rounded-2xl text-center">Stock Forecast</p>
      </div>
      <div className="justify-between flex ">
        <Search />
        {/*<TooltipComponent content="Add the stock" position="BottomCenter">
          <button
            type="button"
            onClick={() => handleClick()}
            style={{ color: (currentMode === 'Dark') && 'white', backgroundColor: currentColor }}
            className="relative text-xl rounded-full p-3 hover:bg-light-gray dark:hover:bg-[#42464D]"
          >
            <div className='flex'>
              <span
                className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
              />
              <div style={{ color: (currentMode === 'Dark') && 'white' }} className="text-sm">
                Add
              </div>
            </div>
          </button>
        </TooltipComponent>*/}
      </div>
      <div className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D] justify-center">
        {/*<div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-2 rounded-2xl"></div>*/}

      </div>
      <div className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D] justify-center">
      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-full md:w-840">
        {/*<div className="flex items-center gap-2">
          <p className="text-xl font-semibold">Stock trends in the next two weeks</p>
        </div>*/}
        <div className="md:w-full overflow-auto w-full">
          <StockChart />
        </div>
      </div>
      {/*<div className="mt-10 w-72 md:w-400">
          {selectedStock.map((item) => (
            <div key={item.symbol} className="flex justify-between mt-4">
              {console.log(item)}
              <div className="flex gap-4">
                <button
                  type="button"
                  className="text-2xl rounded-lg p-1 hover:drop-shadow-xl"
                >
                  <div className="flex w-10">
                    <img src={item.logo_url} />
                  </div>
                </button>
                <div>
                  <p className="text-md font-semibold">{item.longName}</p>
                  <p className="text-sm text-gray-400">{item.symbol}</p>
                </div>
              </div>
              <p className={`${getColor(item.currentPrice - item.previousClose)}`}>{getNumber(item.currentPrice - item.previousClose)}</p>
            </div>
          ))}
        </div>*/}
      </div>
    </div>
  )
}

export default Forecast