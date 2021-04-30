import { Box, Typography, Link } from "@material-ui/core";

const SourceList = ({ sources }) => {
  return (
    <Box>
      <Typography color="textSecondary">More Learning:</Typography>
      {sources.map((source) => (
        <Typography key={source.id}>
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
