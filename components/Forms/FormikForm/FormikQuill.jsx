import dynamic from "next/dynamic";
import { useField } from "formik";

// import Quill component client-side only
// display temporary loading component
const QuillWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>hi</p>,
});

// map formik props to TextField component
const FormikQuill = ({ placeholder, ...props }) => {
  // field passes props required for form handling
  const [field, meta, helpers] = useField(props);
  const { onChange } = field;
  const { onBlur } = helpers;

  // wysiwyg settings; constain available formats
  const modules = {
    toolbar: false,
    // keyboard: { bindings: { tab: { handler: (range, context) => true } } },
  };
  const formats = ["bold", "italic", "underline", "link"];

  return (
    <QuillWrapper
      {...props}
      {...field}
      {...helpers}
      onChange={onChange(props.name)}
      onBlur={onBlur}
      placeholder={placeholder}
      modules={modules}
      formats={formats}
      theme={null}
    />
  );
};

export default FormikQuill;
