import React, { createContext, useContext, useState, useEffect } from 'react';
import Axios from 'axios';
import { auth } from '../firebase';
import { getStockportfolio } from '../data/dummy';
import backendHost from '../config.js'
const StateContext = createContext();
const initialState = {
  chat: false,
  userProfile: false,
  notification: false,
  selectingStock: false,
  selectingDay: false,
};

const formatDate = (date) => {
  const d = new Date(date);
  let month = `${d.getMonth() + 1}`;
  let day = `${d.getDate()}`;
  const year = d.getFullYear();

  if (month.length < 2) month = `0${month}`;
  if (day.length < 2) day = `0${day}`;

  return [year, month, day].join('-');
};

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [stockData, setStockData] = useState(undefined);
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [day, setDay] = useState(new Date('2022-08-22'));
  const [selectedStock, setSelectedStock] = useState([]);
  const [stockportfolio, setStockportfolio] = useState([]);
  const [stockforecast, setStockforecast] = useState([]);

  useEffect(() => {
    let isMounted = true;
    Axios.post(`${backendHost}/stockportfolio`, { date: formatDate(day) }).then((respose) => {
      if (isMounted) {
        const { data } = respose;
        // console.log(data);
        const stocktickers = data.stocktickers.replace('[', '').replace(']', '').replace(/\'/g, '').split(/,\s*/);
        // console.log(stocktickers);
        let chromosome = data.chromosome.replace('[', '').replace(']', '').replace(/\'/g, '').split(/\s+/);
        // console.log(chromosome)
        chromosome = chromosome.map((item) => Number(item));
        const res = [];
        for (let i = 0; i < stocktickers.length; i++) {
          if (chromosome[i] !== 0.0) {
            res.push({ x: stocktickers[i], y: chromosome[i], text: `${(chromosome[i] * 100).toFixed(2)}%` });
          }
        }
        setStockportfolio(res);
      }
    });
    return () => { isMounted = false; };
  }, [day]);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={{ currentColor,
      currentMode,
      activeMenu,
      screenSize,
      stockData,
      setScreenSize,
      handleClick,
      isClicked,
      initialState,
      setIsClicked,
      setActiveMenu,
      setCurrentColor,
      setCurrentMode,
      setMode,
      setColor,
      themeSettings,
      setThemeSettings,
      setStockData,
      user,
      stockportfolio,
      setStockportfolio,
      day,
      setDay,
      selectedStock,
      setSelectedStock,
      stockforecast,
      setStockforecast,
      login,
      setLogin }}
    >
      {/* {!loading && children} */}
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
