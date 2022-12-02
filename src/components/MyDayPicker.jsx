import React from 'react';

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { useStateContext } from '../contexts/ContextProvider';
import 'react-day-picker/dist/style.css';

const formatDate = (date) => {
  const d = new Date(date);
  let month = `${d.getMonth() + 1}`;
  let day = `${d.getDate()}`;
  const year = d.getFullYear();

  if (month.length < 2) month = `0${month}`;
  if (day.length < 2) day = `0${day}`;

  return [year, month, day].join('-');
};

export default function MyDayPicker() {
  const { day, setDay, setStockportfolio } = useStateContext();

  let footer = <p>Please pick a day.</p>;
  if (day) {
    footer = <p>You picked {format(day, 'PP')}.</p>;
    // setStockportfolio(formatDate(day));
  }
  return (
    <DayPicker
      mode="single"
      selected={day}
      onSelect={setDay}
      footer={footer}
    />
  );
}
