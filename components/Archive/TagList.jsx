import { Box, Chip } from "@material-ui/core";

const TagList = ({ tags }) => {
  const filter = (tagId) => {
    console.log(tagId);
  };

  return (
    <Box>
      {tags.map((tag) => (
        <Chip
          key={tag.id}
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
