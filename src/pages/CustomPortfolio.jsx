import React, {useState, useEffect} from "react";
import Multiselect from "../components/Multiselect";
import io from 'socket.io-client';
const socket = io('http://localhost:5000');

const stocktickers = ["AAPL", "MSFT", "AMZN", "TSLA", "GOOGL", "GOOG", "BRK.B", "UNH", "JNJ", "XOM", "PG", "META", "JPM", "NVDA", "V", "HD", "CVX", "ABBV", "MA", "PFE", "LLY", "PEP"];

const CustomPortfolio = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    let isMounted = true;
    if (isMounted)
      socket.on("my_response", (data) => { 
        console.log(data);
        setMessages([...messages, data]);
      })
    return () => {
      isMounted=false;
      socket.off('my_response')
    }
  }, [socket, messages]);
  
  return (
    <div>
      <div className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D] justify-center">
        <p className="text-3xl font-semibold">Custom Portfolio</p>
      </div>

      <div className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D] justify-self-stretch">
        <div id="stock-selection" className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-2 rounded-2xl">
          <div className="flex items-stretch justify-between items-center gap-2">
            <p className="text-xl font-semibold">Stock Selection</p>
          </div>
          <div className="flex justify-between items-center gap-2">
            <Multiselect itemsList={stocktickers} />
          </div>
        </div>
        <div id="console-output" className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-2 rounded-2xl">
          <div className="flex justify-between items-center gap-2">
            <p className="text-xl font-semibold">Server output</p>
          </div>
          <div className="flex gap-5 border-b-1 border-color p-4 justify-center">
            <ul>
            {messages.map((message) =>
              <li key={message.count}>
                {message.count}:{message.data}
              </li>
            )}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D] justify-center"></div>
    </div>
  );
};

export default CustomPortfolio;
