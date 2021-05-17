import { Box, Grid, makeStyles } from "@material-ui/core";

import NavButton from "../Nav/NavButton";
import Search from "./Search";

// create standard-width space for tag list (filter options)
const useStyles = makeStyles((theme) => ({
  tags: { flexGrow: 1 },
}));

// site navigation, search (regex), filter (posts with tag(s))
const DesktopMenu = () => {
  const classes = useStyles();
  return (
    <Box width="100%" display={{ xs: "none", sm: "flex" }}>
      <NavButton label="archive" href="/" />
      <Search />
      <Grid container className={classes.tags}></Grid>
      <NavButton label="bio" href="/bio" />
      <NavButton label="contact" href="/contact" />
    </Box>
  );
};

export default DesktopMenu;
