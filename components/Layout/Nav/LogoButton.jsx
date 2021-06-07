import { Box, Typography } from "@material-ui/core";

// enable use of logo as link; handle centering
const LogoButton = () => {
  return (
    <Box textAlign="center">
      <Typography variant="h4" color="textSecondary">
        The Yohanan Letter
      </Typography>
      <Typography variant="subtitle2" color="textSecondary">
        No Ads. No Fees. No Bullshit.
      </Typography>
    </Box>
  );
};

export default LogoButton;
