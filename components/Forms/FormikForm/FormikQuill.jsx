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
  const { setValue, onBlur } = helpers;

  // wysiwyg settings; constain available formats
  const modules = { toolbar: false };
  const formats = ["bold", "italic", "underline"];

  return (
    <QuillWrapper
      {...field}
      theme={null}
      placeholder="Create a new post here!"
      onChange={(_c, _d, _s, editor) => setValue(editor.getHTML())}
      onBlur={onBlur}
      modules={modules}
      formats={formats}
    />
  );
};

export default FormikQuill;
