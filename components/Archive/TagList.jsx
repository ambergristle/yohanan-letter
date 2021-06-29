import Router from "next/router";
import { Box, Chip, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  tagChip: { marginRight: "5px" },
}));

// render list of tags
const TagList = ({ tags }) => {
  const { tagChip } = useStyles();

  const filter = (name) => {
    Router.push(`/archive?topics=${name}`);
  };

  return (
    <Box>
      {tags.map(({ id, name }) => (
        <Chip
          key={id}
          label={name}
          onClick={() => filter(name)}
          size="small"
          disableRipple
          className={tagChip}
        />
      ))}
    </Box>
  );
};

export default TagList;
