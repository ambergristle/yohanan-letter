import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const ContentField = () => {
  const modules = {
    toolbar: false,
    // toolbar: [["bold", "italic", "underline"]],
  };

  const formats = ["bold", "italic", "underline"];

  return (
    <ReactQuill
      theme={null}
      value={content}
      placeholder="Create a new post here!"
      onChange={handleChange}
      modules={modules}
      formats={formats}
    />
  );
};

export default ContentField;
