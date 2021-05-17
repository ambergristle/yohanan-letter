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
  const handleSave = () => {
    console.log("save");
  };
  const handleClear = () => {
    console.log("clear");
  };
  const handleSchedule = () => {
    console.log("schedule");
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
          label="save"
          startIcon={<SaveIcon />}
          onClick={handleSave}
        />
        <FormikButton
          label="clear"
          startIcon={<DeleteIcon />}
          onClick={handleClear}
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
