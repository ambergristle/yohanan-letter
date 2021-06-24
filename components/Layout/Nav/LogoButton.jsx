import Router from "next/router";
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  logoButton: {
    cursor: "pointer",
  },
}));
// enable use of logo as link; handle centering
const LogoButton = () => {
  const { logoButton } = useStyles();

  const goArchive = () => Router.push("/archive");

  return (
    <Box display="flex" justifyContent="center">
      <Box textAlign="center" className={logoButton} onClick={goArchive}>
        <Typography variant="h4" color="textSecondary">
          The Yohanan Letter
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
          No Ads. No Fees. No Bullshit.
        </Typography>
      </Box>
    </Box>
  );
};

export default LogoButton;
