import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import $ from 'jquery';
import { useStateContext } from '../contexts/ContextProvider';
import { Button, Search } from '.';

const SelectingStock = () => {
  const { currentColor, currentMode, isClicked } = useStateContext();
  const handleClick = () => {
    const value = $('#autocomplete').ejAutoComplete('getValue');
    console.log(value);
  };
  return (
    <div className="nav-item absolute left-20 md:left-96 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg dark:text-gray-200">Select Stock !</p>
        </div>
        <Button icon={<MdOutlineCancel />} color="rgb(153, 171, 180)" bgHoverColor="light-gray" size="2xl" borderRadius="50%" />
      </div>
      <div className="justify-between flex ">
        <Search />
        <TooltipComponent content="Add the stock" position="BottomCenter">
          <button
            type="button"
            onClick={() => handleClick()}
            style={{ color: (currentMode === 'Dark') && 'white', backgroundColor: currentColor }}
            className="relative text-xl rounded-full p-3 hover:bg-light-gray dark:hover:bg-[#42464D]"
          >
            <div className="flex">
              <span
                className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
              />
              <div style={{ color: (currentMode === 'Dark') && 'white' }} className="text-sm">
                Add
              </div>
            </div>
          </button>
        </TooltipComponent>
      </div>
    </div>
  );
};

export default SelectingStock;
