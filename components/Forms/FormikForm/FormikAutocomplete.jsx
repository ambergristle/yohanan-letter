import { useField } from "formik";

import { TextField, Chip } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

const FormikAutocomplete = ({ placeholder, options, ...props }) => {
  // field passes props required for form handling
  const [field, meta, helpers] = useField(props);
  const { value } = field;
  const { setValue } = helpers;

  return (
    <Autocomplete
      {...field}
      multiple
      options={options}
      getOptionLabel={({ name }) => name}
      filterSelectedOptions
      onChange={(_, value) => setValue(value)}
      freeSolo
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={!value.length ? placeholder : ""}
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

export default FormikAutocomplete;
