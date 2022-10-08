import React, {useState, useEffect} from "react";
import Multiselect from "../components/Multiselect";

const stocktickers = ["AAPL", "MSFT", "AMZN", "TSLA", "GOOGL", "GOOG", "BRK.B", "UNH", "JNJ", "XOM", "PG", "META", "JPM", "NVDA", "V", "HD", "CVX", "ABBV", "MA", "PFE", "LLY", "PEP"];

const CustomPortfolio = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    let isMounted = true;
    if (isMounted)
      socket.on("my_response", (data) => { 
        console.log(data);
        //setMessages([...messages, data]);
      })
    return () => {isMounted=false;}
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
            <p className="font-mono">Iteration:1</p>
            {messages.map((message) =>
              <p>{message.text}</p>
            )}
          </div>
        </div>
      </div>
      <div className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D] justify-center"></div>
    </div>
  );
};

export default CustomPortfolio;
