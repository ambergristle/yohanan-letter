import { TextField } from "@material-ui/core";

// subject, intro, topic

const InfoField = () => {
  return (
    <TextField
      value={value}
      placeholder="Post Title"
      onChange={handleChange}
      multiline
      rows={6}
      fullWidth
      variant="outlined"
      margin="dense"
    />
  );
};

export default InfoField;
