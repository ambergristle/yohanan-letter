import { useField } from "formik";
import { v4 as uuid } from "uuid";
import { TextField, Chip } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

// map formik props to Autocomplete component
// add uuids to new tags
const FormikAutocomplete = ({ placeholder, options, setOptions, ...props }) => {
  // field passes props required for form handling
  const [field, meta, helpers] = useField(props);
  const selected = field.value.length;
  const { setValue } = helpers;
  const freeSolo = props.freeSolo;

  // handle changing value for fixed list
  const handleFixedChange = (_e, value) => {
    setValue(value);
  };

  // handle adding new tags (freesolo)
  // push new tags to options (share between fields)
  const handleFreeSoloChange = (_e, value) => {
    const last = value.slice(-1)[0];

    // if last item is new, add uuid and push to options
    if (last && !last.id) {
      const newTag = { id: uuid(), name: last };
      value[value.indexOf(last)] = newTag;
      setOptions([newTag, ...options]);
    }

    // if all tags removed, set to empty array
    setValue(value || []);
  };

  return (
    <Autocomplete
      {...field}
      {...props}
      options={options}
      getOptionLabel={({ name }) => name}
      filterSelectedOptions
      onChange={handleFreeSoloChange}
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

export default FormikAutocomplete;
