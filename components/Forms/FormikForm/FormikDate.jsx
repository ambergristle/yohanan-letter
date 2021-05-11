import { useField } from "formik";

import { parseISO, nextSunday, format, set } from "date-fns";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { DateTimePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import { InputAdornment } from "@material-ui/core";
import EventIcon from "@material-ui/icons/Event";

// const formattedDate = (date = new Date()) => {
//   const sunday = nextSunday(date);
//   const time = { hours: 8, minutes: 0, seconds: 0 };
//   const iso = "yyyy-MM-dd'T'HH:mm:ss";
//   const datetime = set(sunday, time)
//   return format(datetime, iso);
// };

const FormikDate = ({ placeholder, format, ...props }) => {
  // field passes props required for form handling
  const [field, meta, helpers] = useField(props);
  const { setValue } = helpers;

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DateTimePicker
        onChange={(value) => setValue(value)}
        placeholder={placeholder}
        disablePast
        autoOk
        disableToolbar
        animateYearScrolling
        inputVariant="outlined"
        margin="dense"
        format={format}
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

export default FormikDate;
