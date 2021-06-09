import { Box, Typography } from "@material-ui/core";

const Empty = () => {
  return (
    <Box position="absolute" top="25%" left="10%">
      <Typography variant="h5" color="textPrimary">
        Sorry, nothing matched your search.
      </Typography>
    </Box>
  );
};

export default Empty;
