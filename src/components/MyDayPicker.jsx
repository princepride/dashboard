import React from 'react';

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { useStateContext } from '../contexts/ContextProvider';
import 'react-day-picker/dist/style.css';

export default function MyDayPicker() {
  const [day ,setDay] = React.useState(); 

  let footer = <p>Please pick a day.</p>;
  if (day) {
    footer = <p>You picked {format(day, 'PP')}.</p>;
    console.log(day);
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