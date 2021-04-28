import React from "react";

import { Grid, Button } from "@material-ui/core";

import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import ScheduleIcon from "@material-ui/icons/Schedule";

import DateField from "./DateField";

const Control = () => {
  const handleSave = () => {};
  const handleClear = () => {};
  const handleSchedule = () => {};

  return (
    <>
      <Button
        onClick={handleSave}
        color="primary"
        variant="contained"
        startIcon={<SaveIcon />}
        disableRipple
      >
        save
      </Button>
      <Button
        onClick={handleClear}
        color="primary"
        variant="contained"
        startIcon={<DeleteIcon />}
        disableRipple
      >
        clear
      </Button>
      <Button
        onClick={handleClear}
        color="primary"
        variant="contained"
        startIcon={<ScheduleIcon />}
        disableRipple
      >
        schedule
      </Button>
      <DateField />
    </>
  );
};

export default Control;
