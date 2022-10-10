import React, { useState, useRef } from "react";
import GAHyperparameters from "./GAHyperparameters";
import GAEpoch from "./GAEpoch";

const ConsoleAccordion = ({ message }) => {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState("0px");
  const [rotate, setRotate] = useState("transform duration-700 ease");
  const contentSpace = useRef(null);
  const content = message.type == "gahyperparameters" ? <GAHyperparameters message={message} /> : message.type == "gaEpoch" ? <GAEpoch message={message} /> : "default";

  function toggleAccordion() {
    setActive((prevState) => !prevState);
    console.log(active);
    setHeight(active ? "0px" : `${contentSpace.current.scrollHeight}px`);
  }
  return (
    <div className="flex flex-col">
      <button onClick={toggleAccordion} className="py-6 box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between">
        <p className="inline-block text-footnote light">{message.type == "gahyperparameters" ? "GA Hyperparameters (Click here)" : message.type == "gaEpoch" ? "Epoch " + message.epoch + " (Click here)": "default"}</p>
      </button>
      <div ref={contentSpace} style={{ maxHeight: `${height}` }} className="overflow-auto transition-max-height duration-700 ease-in-out">
        <div className="pb-10">{content}</div>
      </div>
    </div>
  );
};

export default ConsoleAccordion;
