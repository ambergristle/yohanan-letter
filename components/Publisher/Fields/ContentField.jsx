import dynamic from "next/dynamic";

// prevent quill load server-side
const QuillWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>hi</p>,
});

const ContentField = ({ content, handleChange }) => {
  const modules = { toolbar: false };
  const formats = ["bold", "italic", "underline"];

  return (
    <>
      <QuillWrapper
        theme={null}
        value={content}
        placeholder="Create a new post here!"
        onChange={handleChange}
        modules={modules}
        formats={formats}
      />
    </>
  );
};

export default ContentField;
