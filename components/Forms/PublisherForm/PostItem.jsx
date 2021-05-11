import FormikField from "../FormikForm/FormikField";
import FormikQuill from "../FormikForm/FormikQuill";
import FormikArray from "../FormikForm/FormikArray";
import SourceItem from "./SourceItem";

const PostItem = ({ name, fields }) => {
  return (
    <>
      <FormikField
        name={`${name}.title`}
        type="text"
        placeholder="Post Title"
      />
      <FormikQuill name={`${name}.text`} />
      <FormikArray name={`${name}.sources`}>
        <SourceItem />
      </FormikArray>
    </>
  );
};

export default PostItem;
