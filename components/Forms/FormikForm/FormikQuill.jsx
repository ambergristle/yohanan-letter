import dynamic from "next/dynamic";
import { useField } from "formik";

// prevent quill load server-side
const QuillWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>hi</p>,
});

const FormikQuill = ({ placeholder, ...props }) => {
  // field passes props required for form handling
  const [field, meta, helpers] = useField(props);
  const { setValue } = helpers;

  const modules = { toolbar: false };
  const formats = ["bold", "italic", "underline"];

  return (
    <QuillWrapper
      {...field}
      theme={null}
      placeholder="Create a new post here!"
      onChange={(content, delta, source, editor) => setValue(editor.getHTML())}
      modules={modules}
      formats={formats}
    />
  );
};

export default FormikQuill;
