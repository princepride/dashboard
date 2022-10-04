import React, {useEffect, useState} from 'react'
const axios = require("axios");
import { useStateContext } from '../contexts/ContextProvider';
import { userProfileData } from '../data/userData';
import { companyInfo } from '../data/dummy';
import { New } from '../components';

const News = () => {
  const { currentColor, currentMode } = useStateContext();
  const [news, setNews] = useState([]);
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://bing-news-search1.p.rapidapi.com/news',
      params: { category: 'business', mkt: 'en-US', safeSearch: 'Off', textFormat: 'Raw' },
      headers: {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': '6be3939a73msh413d424fc2d04c4p15ba7bjsnd28f29cebde3',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      //setNews(response.data.value);
      //console.log(response.data.value);
      const values = response.data.value;
      for (let i = 0; i < values.length; i++) {
        console.log(values[i]);
      }
      setNews(response.data.value);
      //console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, []);
  //const [news, setNews] = useState([]);
  return (
    <div>
      <div className="flex items-center leading-8 gap-3 border-b-1 border-color p-3">
        <img className="rounded-full h-10 w-10" src={companyInfo[0].logo} alt={companyInfo[0].name} />
        <div>
          <p className="font-semibold dark:text-gray-200">Articles for</p>
          <p className="text-gray-500 text-sm dark:text-gray-400">{`${userProfileData[0].firstname} ${userProfileData[0].lastname}`}</p>
        </div>
      </div>
      <div className={`flex justify-center text-7xl italic gap-3`}>
        <div className={currentMode === 'Dark' ? 'text-white' : 'text-black'}>
          Financial News
        </div>
      </div>
      {news.map((item) => (
        <div key={item.name} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 rounded-2xl ">
          {item.name}
        </div>
      ))}
    </div>
  )
}

export default News