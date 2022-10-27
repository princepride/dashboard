import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {auth} from '../firebase';
import {getStockportfolio} from '../data/dummy';
import Axios from 'axios';

const StateContext = createContext();

const initialState = {
  chat: false,
  userProfile: false,
  notification: false,
  selectingStock: false,
  selectingDay: false,
};

const formatDate = (date) => {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}

export const ContextProvider = ({ children }) => {
  
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [stockData, setStockData] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [day, setDay] = useState(new Date("2022-08-22"));
  const [selectedStock, setSelectedStock] = useState([]);
  //const [stockportfolio, setStockportfolio] = useState(getStockportfolio(new Date().toLocaleDateString()));
  const [stockportfolio, setStockportfolio] = useState([]);
  const [stockforecast, setStockforecast] = useState([]);
  const navigate = useNavigate();

  //useEffect(() => {setStockportfolio(getStockportfolio(formatDate(day)))},[day])

  useEffect(() => {
    let isMounted = true;
    Axios.post("http://localhost:3001/stockportfolio", { date: formatDate(day) }).then((respose) => {
        if(isMounted) {
            const data = respose.data
            //console.log(data);
            const stocktickers = data.stocktickers.replace('[', '').replace(']', '').replace(/\'/g, "").split(/,\s*/)
            //console.log(stocktickers);
            let chromosome = data.chromosome.replace('[', '').replace(']', '').replace(/\'/g, "").split(/\s+/)
            //console.log(chromosome)
            chromosome = chromosome.map(item => Number(item))
            const res = []
            for (let i = 0; i < stocktickers.length; i++) {
                if (chromosome[i] != 0.) {
                    res.push({ x: stocktickers[i], y: chromosome[i], text: (chromosome[i] * 100).toFixed(2) + "%" })
                }
            }
            setStockportfolio(res);
        }
    })
    return () => { isMounted = false }
}, [day])

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
        setUser(user);
        setLoading(false);
        if(user) navigate('/Home');
    })
},[user]);

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
    <StateContext.Provider value={{ currentColor, currentMode, activeMenu, screenSize,
    stockData, setScreenSize, handleClick, isClicked, 
    initialState, setIsClicked, setActiveMenu, setCurrentColor, 
    setCurrentMode, setMode, setColor, themeSettings, setThemeSettings,
    setStockData, user, stockportfolio, setStockportfolio, day, setDay,
    selectedStock, setSelectedStock, stockforecast, setStockforecast}}>
      {!loading&&children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
