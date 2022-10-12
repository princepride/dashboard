//import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import { MultiSelectComponent } from "@syncfusion/ej2-react-dropdowns";
import * as React from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import * as ReactDOM from 'react-dom';
import {searchData} from '../data/dummy'
import "./Search.css"

const Search = () => {
    const fields = { value: 'StockName' };
    const { currentMode} = useStateContext();
    const textColor = currentMode === 'Light' ? 'black':'white';

    return (
        //<div >
        <MultiSelectComponent id="atcelement" dataSource={searchData} fields={fields} placeholder="Find a stock" highlight={true}/>
    )
}

export default Search