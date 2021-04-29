import React from "react";

import { TextField, Chip } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

const TagField = () => {
  return (
    <Autocomplete
      name="tags"
      multiple
      options={tagList}
      getOptionLabel={({ name }) => name}
      filterSelectedOptions
      value={selected}
      onChange={handleChange}
      freeSolo
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={!selected.length ? "Tags..." : " "}
          fullWidth
          variant="outlined"
          margin="dense"
        />
      )}
      renderOption={({ id, name }) => (
        <Chip name={id} label={name} size="small" clickable />
      )}
      renderTags={(value, getTagProps) =>
        value.map(({ name }, index) => (
          <Chip label={name} size="small" {...getTagProps({ index })} />
        ))
      }
    />
  );
};

export default TagField;
