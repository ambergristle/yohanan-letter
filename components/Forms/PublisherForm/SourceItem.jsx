import { Box, makeStyles } from "@material-ui/core";

import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";

import { makeSource } from "../../../utils/constructors/initialValues";

import FormikField from "../FormikForm/FormikField";
import FormikIconButton from "../FormikForm/FormikIconButton";

const useStyles = makeStyles((theme) => ({
  visible: { visibility: "visible" },
  hidden: { visibility: "hidden" },
}));

// source fields as FormikArray child
const SourceItem = ({ index, name, only, last, handleAdd, handleDel }) => {
  const { visible, hidden } = useStyles();

  const addSource = () => {
    const newSource = makeSource();
    handleAdd(newSource);
  };

  const delSource = () => {
    handleDel(index);
  };

  return (
    <Box display="flex">
      <Box flexGrow={1}>
        <FormikField
          name={`${name}.title`}
          type="text"
          placeholder="Publication - Article Title"
        />
        <FormikField
          name={`${name}.href`}
          type="text"
          placeholder="https://www.site.com/source"
        />
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="space-evenly">
        <FormikIconButton
          disabled={only}
          color="primary"
          size="small"
          icon={<RemoveCircleIcon />}
          handleClick={delSource}
        />
        <FormikIconButton
          color="primary"
          size="small"
          className={last ? visible : hidden}
          icon={<AddCircleOutlineIcon />}
          handleClick={addSource}
        />
      </Box>
    </Box>
  );
};

export default SourceItem;
