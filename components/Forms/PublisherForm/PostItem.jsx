import { Box, Paper, makeStyles } from "@material-ui/core";

import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";

import { makePost } from "../../../utils/constructors/initialValues";

import FormikField from "../FormikForm/FormikField";
import FormikQuill from "../FormikForm/FormikQuill";
import FormikArray from "../FormikForm/FormikArray";
import FormikAutocomplete from "../FormikForm/FormikAutocomplete";
import FormikIconButton from "../FormikForm/FormikIconButton";

import SourceItem from "./SourceItem";

import { useField } from "formik";

const useStyles = makeStyles((theme) => ({
  postItem: {
    position: "relative",
    marginBottom: "4px",
  },
  delButton: {
    position: "absolute",
    top: "50%",
    bottom: "50%",
    left: "-4%",
  },
}));

// post fields as FormikArray item
const PostItem = ({
  index,
  name,
  only,
  last,
  tagOptions,
  setTagOptions,
  handleAdd,
  handleDel,
}) => {
  const { postItem, delButton } = useStyles();
  const [field, meta, helpers] = useField(name);

  const addPost = () => {
    const newPost = makePost(field.value.date);
    handleAdd(newPost);
  };

  const delPost = () => {
    handleDel(index);
  };

  return (
    <Box display="flex" flexDirection="column">
      <Paper className={postItem} variant="outlined">
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
        <FormikIconButton
          disabled={only}
          color="primary"
          className={delButton}
          icon={<RemoveCircleIcon />}
          handleClick={delPost}
        />
      </Paper>
      {last && (
        <FormikIconButton
          color="primary"
          icon={<AddCircleIcon fontSize={"large"} />}
          handleClick={addPost}
        />
      )}
    </Box>
  );
};

export default PostItem;
