import { useFormikContext } from "formik";

import { initialValues } from "../../../utils/constructors/initialValues";
import tryPublish from "../../../utils/requests/tryPublish";

import { Box, makeStyles } from "@material-ui/core";

import FormikButton from "../FormikForm/FormikButton";
import FormikDate from "../FormikForm/FormikDate";

import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import ScheduleIcon from "@material-ui/icons/Schedule";

const useStyles = makeStyles((theme) => ({
  controlBox: { margin: "4px 0px" },
  dateField: { marginBottom: 0 },
  scheduleButton: { backgroundColor: "rgba(50, 130, 184, 1)" },
}));

// save, clear, or schedule newsletter
const Controls = () => {
  const { controlBox, dateField, scheduleButton } = useStyles();
  const { values, resetForm, setSubmitting } = useFormikContext();
  const { date } = values;

  const handleClear = () => {
    resetForm({ values: initialValues });
  };

  const handleSubmit = (event) => {
    setSubmitting(true);
    tryPublish(values, event.target.innerText);
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
          color="primary"
          startIcon={<DeleteIcon />}
          onClick={handleClear}
        />
        <FormikButton
          label="save"
          color="primary"
          startIcon={<SaveIcon />}
          onClick={handleSubmit}
        />
        <FormikButton
          label="schedule"
          color="primary"
          startIcon={<ScheduleIcon />}
          onClick={handleSubmit}
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
