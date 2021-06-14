import { useField } from "formik";
import { Select, OutlinedInput, MenuItem, Chip } from "@material-ui/core";

const FormikSelect = ({ options, className, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const selected = field.value;
  const { setValue } = helpers;

  const handleChange = (_e, value) => {
    setValue(value);
  };

  return (
    <Select
      {...field}
      {...props}
      name={props.name}
      input={<OutlinedInput className={className} fullWidth />}
      renderValue={(value) => <Chip label={value} size="small" />}
    >
      {options.map((option, index) => (
        <MenuItem key={index} value={option}>
          {option}
        </MenuItem>
      ))}
    </Select>
  );
};

export default FormikSelect;
