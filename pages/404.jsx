import { Box, Typography } from "@material-ui/core";

const NotFound = () => {
  return (
    <Box position="absolute" top="25%" left="10%">
      <Typography variant="h5" color="textPrimary">
        Sorry, we couldn't find what you were looking for.
      </Typography>
    </Box>
  );
};

export default NotFound;
