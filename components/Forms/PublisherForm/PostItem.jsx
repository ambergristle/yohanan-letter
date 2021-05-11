import FormikField from "../FormikForm/FormikField";
import FormikQuill from "../FormikForm/FormikQuill";
import FormikArray from "../FormikForm/FormikArray";
import SourceItem from "./SourceItem";
import FormikAutocomplete from "../FormikForm/FormikAutocomplete";

const options = [
  { id: 0, name: "first" },
  { id: 1, name: "second" },
  { id: 2, name: "third" },
];

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
      <FormikAutocomplete
        name={`${name}.tags`}
        placeholder="Tags..."
        options={options}
      />
    </>
  );
};

export default PostItem;
