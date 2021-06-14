import { useField } from "formik";
import { v4 as uuid } from "uuid";
import { TextField, Chip } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

// map formik props to Autocomplete component
// add uuids to new items
const FormikMultiSelect = ({ placeholder, options, setOptions, ...props }) => {
  // field passes props required for form handling
  const [field, meta, helpers] = useField(props);
  const selected = field.value.length;
  const { setValue } = helpers;

  // handle adding new items (freesolo)
  // push new items to options (share between fields)
  const handleChange = (_e, value) => {
    const last = value.slice(-1)[0];

    // if last item is new, add uuid and push to options
    if (last && !last.id) {
      const newItem = { id: uuid(), name: last };
      value[value.indexOf(last)] = newItem;
      setOptions([newItem, ...options]);
    }

    // if all items removed, set to empty array
    setValue(value || []);
  };

  return (
    <Autocomplete
      {...field}
      multiple
      options={options}
      getOptionLabel={({ name }) => name}
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
          <Chip
            name={id}
            label={name}
            size="small"
            {...getTagProps({ index })}
          />
        ))
      }
    />
  );
};

export default FormikMultiSelect;
