import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";

import { makePost } from "../../../utils/constructors/initialValues";

import FormikField from "../FormikForm/FormikField";
import FormikQuill from "../FormikForm/FormikQuill";
import FormikArray from "../FormikForm/FormikArray";
import FormikAutocomplete from "../FormikForm/FormikAutocomplete";
import FormikIconButton from "../FormikForm/FormikIconButton";

import SourceItem from "./SourceItem";

import { useField } from "formik";

// post fields as FormikArray item
const PostItem = ({
  index,
  name,
  tagOptions,
  setTagOptions,
  handleAdd,
  handleDel,
}) => {
  const [field, meta, helpers] = useField(name);

  const addPost = () => {
    const newPost = makePost(field.value.date);
    handleAdd(newPost);
  };

  const delPost = () => {
    handleDel(index);
  };

  return (
    <>
      <FormikField
        name={`${name}.title`}
        type="text"
        placeholder="Post Title"
      />
      <FormikQuill
        name={`${name}.text`}
        placeholder="Create a new post here!"
      />
      <FormikArray name={`${name}.sources`}>
        <SourceItem />
      </FormikArray>
      <FormikAutocomplete
        name={`${name}.tags`}
        placeholder="Tags..."
        options={tagOptions}
        setOptions={setTagOptions}
      />
      <FormikIconButton icon={<AddCircleOutlineIcon />} handleClick={addPost} />
      <FormikIconButton icon={<RemoveCircleIcon />} handleClick={delPost} />
    </>
  );
};

export default PostItem;
