import { useState } from "react";
import TextField from "./Fields/TextField";
import ContentField from "./Fields/ContentField";
// import SourceList from "./Fields/SourceList";
// import TagField from "./Fields/TagField";

const PostBlock = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (event) => {
    setTopic(event.target.value);
  };

  const handleContentChange = (content, delta, source, editor) => {
    console.log(arguments);
    setContent(editor.getHTML());
  };

  return (
    <>
      <TextField
        text={title}
        handleChange={handleTitleChange}
        placeholder="Post Title"
        multi={false}
      />
      <ContentField content={content} handleChange={handleContentChange} />
    </>
  );
};

export default PostBlock;
