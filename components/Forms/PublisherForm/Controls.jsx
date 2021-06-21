import { useFormikContext } from "formik";

import { initialValues } from "../../../utils/constructors/initialValues";
import tryPublishDraft from "../../../utils/requests/tryPublishDraft";

import { Box, makeStyles } from "@material-ui/core";

import FormikButton from "../FormikForm/FormikButton";
import FormikDate from "../FormikForm/FormikDate";

import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import ScheduleIcon from "@material-ui/icons/Schedule";

const useStyles = makeStyles((theme) => ({
  controlBox: { margin: "4px 0px" },
  controlButton: { marginRight: "10px" },
  dateField: { marginBottom: 0 },
}));

// save, clear, or schedule newsletter
const Controls = ({ draft }) => {
  const { controlBox, controlButton, dateField } = useStyles();
  const { values, resetForm, setSubmitting } = useFormikContext();
  const { date } = values;

  const handleClear = () => {
    resetForm({ values: initialValues });
  };

  const handleSubmit = (event) => {
    setSubmitting(true);
    tryPublishDraft(values, event.target.innerText);
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
          className={controlButton}
          startIcon={<DeleteIcon />}
          onClick={handleClear}
        />
        <FormikButton
          label="save"
          color="primary"
          className={controlButton}
          startIcon={<SaveIcon />}
          onClick={handleSubmit}
        />
        {draft && (
          <FormikButton
            label="schedule"
            color="primary"
            startIcon={<ScheduleIcon />}
            onClick={handleSubmit}
          />
        )}
      </Box>
      <FormikDate
        name="date"
        format="MMMM dd @ HH:mm ZZZZ"
        className={dateField}
        disabled={!draft}
      />
    </Box>
  );
};

export default Controls;
