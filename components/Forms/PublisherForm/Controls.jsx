import { Box } from "@material-ui/core";

import FormikButton from "../FormikForm/FormikButton";

import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import ScheduleIcon from "@material-ui/icons/Schedule";

// save, clear, or schedule newsletter
const Controls = () => {
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
    <Box display="flex" justifyContent="space-between">
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
    </Box>
  );
};

export default Controls;
