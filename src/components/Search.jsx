// import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useStateContext } from '../contexts/ContextProvider';
import { searchData } from '../data/dummy';
import './Search.css';

const Search = () => {
  const fields = { value: 'StockName' };
  const { currentMode, stockforecast, setStockforecast } = useStateContext();
  const textColor = currentMode === 'Light' ? 'black' : 'white';

  const handleChange = (e) => {
    setStockforecast(e.target.value);
  };

  return (
  // <div >
    <AutoCompleteComponent
      id="atcelement"
      dataSource={searchData}
      fields={fields}
      placeholder="Find a stock"
      onChange={handleChange}
      highlight
    />
  );
};

export default Search;
