import React from 'react';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from '../contexts/ContextProvider';
import { SelectingStock } from '../components';
import { FiSearch } from "react-icons/fi";

const Recommendations = () => {
  const { currentColor, currentMode, handleClick, isClicked } = useStateContext();
  return (
    <div className="m-4 md:m-4 mt-12 p-4 md:p-4">
      <TooltipComponent content="Want personal advice ? Let's try !" position='bottomStart' >
        <button
          type="button"
          onClick={() => handleClick('selectingStock')}
          style={{ color: (currentMode === 'Dark') && 'white', backgroundColor: currentColor }}
          className="relative text-xl rounded-full p-3 hover:bg-light-gray dark:hover:bg-[#42464D]"
        >
          <div className='flex'>
            <span
              className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
            />
            <div style={{ color: (currentMode === 'Dark') && 'white' }} className="text-sm">
              Search More
            </div>
            <FiSearch />
          </div>
        </button>
      </TooltipComponent>
      <div className="justify-center">{isClicked.selectingStock && <SelectingStock />}</div>
    </div>
  )
}

export default Recommendations