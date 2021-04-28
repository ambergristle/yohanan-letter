import React, { useState } from "react";

import { parseISO, isSunday, format, set } from "date-fns";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { DatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import { InputAdornment } from "@material-ui/core";

import EventIcon from "@material-ui/icons/Event";

const formattedDate = (date = new Date()) => {
  const time = { hours: 8, minutes: 0, seconds: 0 };
  const iso = "yyyy-MM-dd'T'HH:mm:ss";
  return format(set(date, time), iso);
};

const DateField = () => {
  const [publishDate, setPublishDate] = useState(new Date("2021-04-25"));
  const filterDays = (date) => !isSunday(date);

  const handleDateChange = (date) => {};

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        placeholder={format(publishDate, "MM/dd/yyyy")}
        value={publishDate}
        onChange={handleDateChange}
        disablePast="true"
        shouldDisableDate={filterDays}
        autoOk
        disableToolbar="true"
        animateYearScrolling
        inputVariant="outlined"
        margin="dense"
        format="MM/dd/yyyy"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <EventIcon />
            </InputAdornment>
          ),
        }}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DateField;
