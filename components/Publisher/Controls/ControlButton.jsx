import React from "react";

import { Box, Button } from "@material-ui/core";

import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import ScheduleIcon from "@material-ui/icons/Schedule";

const ControlButton = ({ label, handleClick }) => {
  const icon = (label) => {
    switch (label) {
      case "save":
        return <SaveIcon />;
      case "clear":
        return <DeleteIcon />;
      case "schedule":
        return <ScheduleIcon />;
    }
  };

  return (
    <Box mr={1}>
      <Button
        onClick={handleClick}
        color="primary"
        variant="contained"
        startIcon={icon(label)}
        disableRipple
      >
        {label}
      </Button>
    </Box>
  );
};

export default ControlButton;
