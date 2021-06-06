import { Box, Typography } from "@material-ui/core";

const NotFound = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Typography variant="h5" color="textPrimary">
        Sorry, we couldn't find what you were looking for.
      </Typography>
    </Box>
  );
};

export default NotFound;
