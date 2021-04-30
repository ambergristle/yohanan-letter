import ContentField from "./Fields/ContentField";
import SourceField from "./Fields/SourceField";
import TagField from "./Fields/TagField";

const PostBlock = () => {
  return (
    <>
      <ContentField />
      <SourceField />
      <TagField />
    </>
  );
};

export default PostBlock;
