import React from "react";

const GAEpoch = ({ message }) => {
  return (
    <div>
      <table className="shadow-lg bg-white">
        <thead>
          <tr>
            <th key={Math.random()} className="bg-blue-100 border text-left px-2 py-1">popid</th>
            <th key={Math.random()} className="bg-blue-100 border text-left px-2 py-1">sharpe</th>
            {message.stocktickers.map((ticker) => {
              return <th key={Math.random()} className="bg-blue-100 border text-left px-2 py-1">{ticker}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {message.population.map((popMember) => {
            return (
              <tr key={Math.random()}>
                <td key={Math.random()} className="border px-2 py-1">{popMember.popid}</td>
                <td key={Math.random()} className="border px-2 py-1">{popMember.sharpe}</td>
                {popMember.chromosome.map((tickerVal) => {
                  return <td key={Math.random()} className="border px-2 py-1">{tickerVal}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
    </div>
  );
};

export default GAEpoch;
