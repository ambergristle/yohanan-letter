import FormikField from "../FormikForm/FormikField";
import FormikQuill from "../FormikForm/FormikQuill";
import FormikArray from "../FormikForm/FormikArray";
import FormikAutocomplete from "../FormikForm/FormikAutocomplete";

import SourceItem from "./SourceItem";

// post fields as FormikArray item
const PostItem = ({ name, fields, tagOptions, setTagOptions }) => {
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
    </>
  );
};

export default PostItem;
