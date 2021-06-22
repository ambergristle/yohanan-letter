import { useRouter } from "next/router";
import parse from "html-react-parser";
import { format } from "date-fns";
import { Paper, Box, Typography, makeStyles } from "@material-ui/core";

import SourceList from "./SourceList";
import TagList from "./TagList";
import ReadMoreButton from "./ReadMoreButton";

// truncate posts to preview length (char num)
const truncate = (text, previewLength) => {
  let preview = text.substring(0, previewLength).replace(/\s+\S*$/, "");
  return `${preview}...`;
};

// truncate text & hide sources if preview (for feed)
const Post = ({ post: { title, date, text, sources, tags, slug } }) => {
  const router = useRouter();
  const { query } = router.query || null;

  const preview = !query || query < 4 ? true : false;
  const areSources = sources.length > 0;

  text = text.replace(/<p><br><\/p>/g, "");
  const dateString = format(new Date(date), "MMMM dd, yyyy");

  return (
    <Paper variant="outlined">
      <Typography variant="h4" color="primary">
        {title}
      </Typography>
      <Typography variant="subtitle1" color="secondary">
        {dateString}
      </Typography>
      <TagList tags={tags} />
      <Box
        fontFamily="Lato, sans-serif"
        textAlign="justify"
        color="rgba(238, 238, 238, 1)"
        textOverflow={preview ? null : "ellipsis"}
      >
        {parse(preview ? truncate(text, 500) : text)}
      </Box>
      {!preview && areSources && <SourceList sources={sources} />}
      {preview && (
        <Box display="flex" justifyContent="flex-end">
          <ReadMoreButton slug={slug} />
        </Box>
      )}
    </Paper>
  );
};

export default Post;
