import React, { useState, useEffect } from "react";
import { MultiSelectComponent } from "@syncfusion/ej2-react-dropdowns";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import io from "socket.io-client";
const socket = io("http://localhost:5000");

const stocktickers = ["AAPL", "MSFT", "AMZN", "TSLA", "GOOGL", "GOOG", "BRK.B", "UNH", "JNJ", "XOM", "PG", "META", "JPM", "NVDA", "V", "HD", "CVX", "ABBV", "MA", "PFE", "LLY", "PEP"];

const CustomPortfolio = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    let isMounted = true;
    if (isMounted)
      socket.on("my_response", (data) => {
        console.log(data);
        setMessages([...messages, data]);
      });
    return () => {
      isMounted = false;
      socket.off("my_response");
    };
  }, [socket, messages]);

  return (
    <div>
      <div className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D] justify-center">
        <p className="text-3xl font-semibold">Custom Portfolio</p>
      </div>

      <div className="columns-2 gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D] justify-self-stretch">
        <div id="stock-selection" className="overflow-y-scroll bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-2 rounded-2xl">
          <div className="w-full items-stretch justify-between items-center gap-2">
            <p className="text-xl font-semibold">Portfolio Optimizations Hyperparameters</p>
          </div>
          <div className="w-full justify-between items-center gap-2">
            <form>
              <br />
              <br />
              <label>Stocktickers:</label>
              <MultiSelectComponent
                id="mtselement"
                dataSource={stocktickers}
                placeholder="Select Stocks"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <br />
              <br />
              <label htmlFor="popsize">Population Size:</label>
              <TextBoxComponent id="popsize" name="popsize" value="10"></TextBoxComponent>
              <br />
              <br />
              <label htmlFor="numEpoch">Number of Epochs:</label>
              <TextBoxComponent id="numEpoch" name="numEpoch" value="40"></TextBoxComponent>
              <br />
              <br />
              <label htmlFor="selectionRate">Selection Rate:</label>
              <TextBoxComponent id="selectionRate" name="selectionRate" value="0.4"></TextBoxComponent>
              <br />
              <br />
              <label htmlFor="crossoverRate">Crossover Rate:</label>
              <TextBoxComponent id="crossoverRate" name="crossoverRate" value="0.4"></TextBoxComponent>
              <br />
              <br />
              <label htmlFor="mutationRate">Mutation Rate:</label>
              <TextBoxComponent id="mutationRate" name="mutationRate" value="0.4"></TextBoxComponent>
              <br />
              <br />
              <input
                type="submit"
                value="Submit"
                className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              ></input>
            </form>
          </div>
        </div>
        <div id="console-output" className="overflow-y-scroll bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-2 rounded-2xl">
          <div className="flex justify-between items-center gap-2">
            <p className="text-xl font-semibold">Server output</p>
          </div>
          <div className="flex gap-5 border-b-1 border-color p-4 justify-center">
            <ul>
              {messages.map((message) => (
                <li key={message.count}>
                  {message.count}:{message.data}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D] justify-center"></div>
    </div>
  );
};

export default CustomPortfolio;
