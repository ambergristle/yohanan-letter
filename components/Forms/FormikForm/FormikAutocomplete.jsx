import { useField } from "formik";

import { TextField, Chip } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

const FormikAutocomplete = ({ placeholder, options, ...props }) => {
  // field passes props required for form handling
  const [field, meta, helpers] = useField(props);
  const selected = field.value.length;
  const { setValue } = helpers;

  const handleChange = (_e, value) => {
    const last = value.slice(-1)[0];
    if (!last.id) {
      value[value.indexOf(last)] = { id: selected.length, name: last };
    }
    setValue(value);
  };

  return (
    <Autocomplete
      {...field}
      multiple
      options={options}
      getOptionLabel={({name}) => name}
      filterSelectedOptions
      onChange={handleChange}
      freeSolo
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={!selected ? placeholder : ""}
          fullWidth
          variant="outlined"
          margin="dense"
        />
      )}
      renderOption={({ id, name }) => (
        <Chip name={id} label={name} size="small" clickable />
      )}
      renderTags={(value, getTagProps) =>
        value.map(({ id, name }, index) => (
          <Chip name={id} label={name} size="small" {...getTagProps({ index })} />
        ))
      }
    />
  );
};

export default FormikAutocomplete;

// onKeyDown={(event) => {
//   if (event.type === "keydown") {
//     setValue({
//       id: options.length,
//       name: event.target.value,
//     });
//   }
// }}
