import React from "react";

import { Box } from "@material-ui/core";

import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import ScheduleIcon from "@material-ui/icons/Schedule";

import ControlButton from "./ControlButton";
import DateField from "./DateField";

const Control = () => {
  const handleSave = () => {};
  const handleClear = () => {};
  const handleSchedule = () => {};

  return (
    <Box display="flex" justifyContent="space-between">
      <Box display="flex">
        <ControlButton label="save" />
        <ControlButton label="clear" />
        <ControlButton label="schedule" />
      </Box>
      <DateField />
    </Box>
  );
};

export default Control;
