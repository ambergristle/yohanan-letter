import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";

import { makeSource } from "../../../utils/constructors/initialValues";

import FormikField from "../FormikForm/FormikField";
import FormikIconButton from "../FormikForm/FormikIconButton";

// source fields as FormikArray child
const SourceItem = ({ index, name, handleAdd, handleDel }) => {
  const addSource = () => {
    const newSource = makeSource();
    handleAdd(newSource);
  };

  const delSource = () => {
    handleDel(index);
  };

  return (
    <>
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
      <FormikIconButton
        icon={<AddCircleOutlineIcon />}
        handleClick={addSource}
      />
      <FormikIconButton icon={<RemoveCircleIcon />} handleClick={delSource} />
    </>
  );
};

export default SourceItem;
