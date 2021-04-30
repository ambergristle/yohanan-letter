import { Typography, Link } from "@material-ui/core";

const SourceList = ({ sources }) => {
  const source = useSelector((state) =>
    sourcesSelectors.selectById(state, sourceId)
  );

  return (
    <Box>
      <Typography color="textSecondary">More Learning:</Typography>
      {sources.map((source) => (
        <Typography>
          <Link
            aria-label={source.title}
            href={source.href}
            target="_blank"
            color="textPrimary"
          >
            {source.title}
          </Link>
        </Typography>
      ))}
    </Box>
  );
};

export default SourceList;
