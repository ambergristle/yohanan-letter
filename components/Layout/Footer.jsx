import { Grid, Typography, makeStyles } from "@material-ui/core";

import NavButton from "./Nav/NavButton";
import SocialButton from "./Nav/SocialButton";

// fix footer at page bottom
const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "rgba(34, 34, 34, 1)",
    position: "absolute",
    bottom: 0,
  },
}));

// high-level navigation, social media links, disclaimer
const Footer = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={classes.footer}
      component="footer"
    >
      <Grid item>
        <NavButton label="archive" href="/archive" />
        <NavButton label="bio" href="/bio" />
        <NavButton label="contact" href="/contact" />
        <SocialButton label="twitter" href={"twitter"} />
        <SocialButton label="linkedin" href={"linkedin"} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="caption" paragraph>
          As required by NY State, please note that "this letter may constitute
          attorney advertising. Prior results do not guarantee a similar
          outcome." The information provided in this letter does not, and is not
          intended to, constitute legal or investment advice.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
