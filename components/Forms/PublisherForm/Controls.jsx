import { useFormikContext } from "formik";

import { Box, makeStyles } from "@material-ui/core";

import FormikButton from "../FormikForm/FormikButton";
import FormikDate from "../FormikForm/FormikDate";

import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import ScheduleIcon from "@material-ui/icons/Schedule";

const useStyles = makeStyles((theme) => ({
  controlBox: { margin: "4px 0px" },
  dateField: { marginBottom: 0 },
}));

// save, clear, or schedule newsletter
const Controls = () => {
  const { controlBox, dateField } = useStyles();
  const { values, resetForm, setSubmitting } = useFormikContext();
  const { date } = values;

  const handleClear = () => {
    resetForm();
  };
  const handleSave = () => {
    console.log("save");
    setSubmitting(true);
    values.posts.forEach((post) => {
      post.date = date;
    });
    console.log(values);
    setSubmitting(false);
  };
  const handleSchedule = () => {
    console.log("schedule");
    setSubmitting(true);
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      className={controlBox}
    >
      <Box display="flex">
        <FormikButton
          label="clear"
          startIcon={<DeleteIcon />}
          onClick={handleClear}
        />
        <FormikButton
          label="save"
          startIcon={<SaveIcon />}
          onClick={handleSave}
        />
        <FormikButton
          label="schedule"
          startIcon={<ScheduleIcon />}
          onClick={handleSchedule}
        />
      </Box>
      <FormikDate
        name="date"
        format="MMMM dd @ HH:mm ZZZZ"
        className={dateField}
      />
    </Box>
  );
};

export default Controls;
