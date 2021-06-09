import { Box, Chip, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  tagChip: { marginRight: "5px" },
}));

// render list of tags
const TagList = ({ tags }) => {
  const { tagChip } = useStyles();

  const filter = (tagId) => {
    console.log(tagId);
  };

  return (
    <Box>
      {tags.map(({ id, name }) => (
        <Chip
          key={id}
          label={name}
          onClick={() => filter(id)}
          size="small"
          disableRipple
          className={tagChip}
        />
      ))}
    </Box>
  );
};

export default TagList;
