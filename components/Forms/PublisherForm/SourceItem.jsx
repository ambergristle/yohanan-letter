import FormikField from "../FormikForm/FormikField";

// source fields as FormikArray child
const SourceItem = ({ name }) => {
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
    </>
  );
};

export default SourceItem;
