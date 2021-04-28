import React from "react";

import { TextField } from "@material-ui/core";

const Field = () => {
  return (
    <TextField
      value={value}
      placeholder="Post Title"
      onChange={handleChange}
      multiline
      rows={rows}
      fullWidth
      variant="outlined"
      margin="dense"
    />
  );
};

export default Field;
