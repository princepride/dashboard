import React from "react";

const GAHyperparameters = ({ message }) => {
  return (
    <div>
      <table className="shadow-lg bg-white">
        <thead>
          <tr>
            <th className="bg-blue-100 border text-left px-2 py-1">date</th>
            <th className="bg-blue-100 border text-left px-2 py-1">runid</th>
            <th className="bg-blue-100 border text-left px-2 py-1">startdate</th>
            <th className="bg-blue-100 border text-left px-2 py-1">enddate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-2 py-1">{message.data.date}</td>
            <td className="border px-2 py-1">{message.data.runid}</td>
            <td className="border px-2 py-1">{message.data.startdate}</td>
            <td className="border px-2 py-1">{message.data.enddate}</td>
          </tr>
        </tbody>
      </table>
      <br />
      <table className="shadow-lg bg-white">
        <thead>
          <tr>
            <th className="bg-blue-100 border text-left px-2 py-1">popSize</th>
            <th className="bg-blue-100 border text-left px-2 py-1">maxEpochs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-2 py-1">{message.data.popSize}</td>
            <td className="border px-2 py-1">{message.data.maxEpochs}</td>
          </tr>
        </tbody>
      </table>
      <br />
      <table className="shadow-lg bg-white">
        <thead>
          <tr>
            <th className="bg-blue-100 border text-left px-2 py-1">selectionRate</th>
            <th className="bg-blue-100 border text-left px-2 py-1">mutationRate</th>
            <th className="bg-blue-100 border text-left px-2 py-1">crossoverRate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-2 py-1">{message.data.selectionRate}</td>
            <td className="border px-2 py-1">{message.data.mutationRate}</td>
            <td className="border px-2 py-1">{message.data.crossoverRate}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GAHyperparameters;
