import React from 'react'
const axios = require("axios");
import { useStateContext } from '../contexts/ContextProvider';

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
  const values = response.data.value;
  for(let i = 0; i < values.length;i++){
    console.log(values[i]);
  }
  //console.log(response.data);
}).catch(function (error) {
  console.error(error);
});

const News = () => {
  
  return (
    <div>News</div>
  )
}

export default News