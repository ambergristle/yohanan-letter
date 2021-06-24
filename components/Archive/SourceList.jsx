import { Box, Typography, Link, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  sourceLink: { color: "rgba(50, 130, 184, 1)" },
}));

// render list of sources for full posts
const SourceList = ({ sources }) => {
  const { sourceLink } = useStyles();

  return (
    <Box>
      <Typography color="textSecondary">More Learning:</Typography>
      {sources.map((source) => (
        <Typography key={source.id}>
          <Link
            aria-label={source.title}
            href={source.href}
            target="_blank"
            className={sourceLink}
          >
            {source.title}
          </Link>
        </Typography>
      ))}
    </Box>
  );
};

export default SourceList;
