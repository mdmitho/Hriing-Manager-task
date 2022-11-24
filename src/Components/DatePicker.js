import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';

const DatePicker=()=> {
    const [selectedDay, setSelectedDay] = useState(new Date());

    const footer = selectedDay ? (
      <p>You selected {format(selectedDay, 'PPP')}.</p>
    ) : (
      <p>Please pick a day.</p>
    );

    return (
        <div>
             <DayPicker
      mode="single"
      selected={selectedDay}
      onSelect={setSelectedDay}
      footer={footer}
    />
        </div>
    );
}

export default DatePicker;