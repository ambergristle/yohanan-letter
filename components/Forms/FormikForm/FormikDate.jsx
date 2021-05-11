import { useField } from "formik";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { DateTimePicker } from "@material-ui/pickers";
import LuxonUtils from "@date-io/luxon";

import { InputAdornment } from "@material-ui/core";
import EventIcon from "@material-ui/icons/Event";

const FormikDate = ({ placeholder, format, ...props }) => {
  // field passes props required for form handling
  const [field, meta, helpers] = useField(props);
  const { setValue } = helpers;

  return (
    <MuiPickersUtilsProvider utils={LuxonUtils}>
      <DateTimePicker
        {...field}
        onChange={(value) => setValue(value)}
        placeholder={placeholder}
        disablePast
        autoOk
        disableToolbar
        ampm={false}
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
