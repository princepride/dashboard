import React from "react";

const GAHyperparameters = ({ message }) => {
  return (
    <div>
      <table className="shadow-lg bg-white">
        <tr>
          <th className="bg-blue-100 border text-left px-4 py-2">date</th>
          <th className="bg-blue-100 border text-left px-4 py-2">runid</th>
          <th className="bg-blue-100 border text-left px-4 py-2">startdate</th>
          <th className="bg-blue-100 border text-left px-4 py-2">enddate</th>
        </tr>
        <tr>
          <td className="border px-4 py-2">{message.data.date}</td>
          <td className="border px-4 py-2">{message.data.runid}</td>
          <td className="border px-4 py-2">{message.data.startdate}</td>
          <td className="border px-4 py-2">{message.data.enddate}</td>
        </tr>
      </table>
      <br />
      <table className="shadow-lg bg-white">
        <tr>
          <th className="bg-blue-100 border text-left px-4 py-2">maxstocks</th>
          <th className="bg-blue-100 border text-left px-4 py-2">maxEpochs</th>
        </tr>
        <tr>
          <td className="border px-4 py-2">{message.data.maxstocks}</td>
          <td className="border px-4 py-2">{message.data.maxEpochs}</td>
        </tr>
      </table>
      <br />
      <table className="shadow-lg bg-white">
        <tr>
          <th className="bg-blue-100 border text-left px-4 py-2">selectionRate</th>
          <th className="bg-blue-100 border text-left px-4 py-2">mutationRate</th>
          <th className="bg-blue-100 border text-left px-4 py-2">crossoverRate</th>
        </tr>
        <tr>
          <td className="border px-4 py-2">{message.data.selectionRate}</td>
          <td className="border px-4 py-2">{message.data.mutationRate}</td>
          <td className="border px-4 py-2">{message.data.crossoverRate}</td>
        </tr>
      </table>
    </div>
  );
};

export default GAHyperparameters;
