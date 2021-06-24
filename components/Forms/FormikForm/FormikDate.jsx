import { useField } from "formik";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { DateTimePicker } from "@material-ui/pickers";
import LuxonUtils from "@date-io/luxon";
import { Settings } from "luxon";
import { InputAdornment } from "@material-ui/core";
import EventIcon from "@material-ui/icons/Event";

Settings.defaultZoneName = "America/New_York";

// map formik props to DateTimePicker component
const FormikDate = ({ placeholder, format, ...props }) => {
  // field passes props required for form handling
  const [field, meta, helpers] = useField(props);
  const { setValue } = helpers;

  return (
    <MuiPickersUtilsProvider utils={LuxonUtils}>
      <DateTimePicker
        {...field}
        {...props}
        onChange={(value) => setValue(value.toISO())}
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
