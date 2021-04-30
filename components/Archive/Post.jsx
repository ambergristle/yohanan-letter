import parse from "html-react-parser";
import { format } from "date-fns";

import { Box, Typography } from "@material-ui/core";

import SourceList from "./SourceList";
import TagList from "./TagList";
// import ReadMoreButton from "./ReadMoreButton";

const Post = ({ preview, post: { topic, date, content, sources, tags } }) => {
  const dateString = format(new Date(date), "MMMM dd, yyyy");

  return (
    <Box>
      <Typography>{topic}</Typography>
      <Typography>{dateString}</Typography>
      <TagList tags={tags} />
      <Box
        fontFamily="Lato, sans-serif"
        textAlign="justify"
        color="rgba(238, 238, 238, 1)"
        textOverflow={preview ? null : "ellipsis"}
      >
        {parse(content)}
      </Box>
      {!preview && <SourceList sources={sources} />}
    </Box>
  );
};

export default Post;

// <TagList />
// {!preview && <SourceList />}
// {preview && <ReadMoreButton />}
