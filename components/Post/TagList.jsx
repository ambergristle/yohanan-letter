import { Box, Chip } from "@material-ui/core";

const TagList = ({ postId }) => {
  const filter = (tagId) => {
    console.log(tagId);
  };

  return (
    <Box>
      {tags.map((tag) => (
        <Chip
          label={tag.name}
          onClick={() => filter(tag.id)}
          size="small"
          disableRipple
        />
      ))}
    </Box>
  );
};

export default TagList;
