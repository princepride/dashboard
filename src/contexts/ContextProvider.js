import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {auth} from '../firebase';

const StateContext = createContext();

const initialState = {
  chat: false,
  userProfile: false,
  notification: false,
  selectingStock: false,
};

export const ContextProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [stockData, setStockData] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

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
    setStockData, user}}>
      {!loading&&children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
