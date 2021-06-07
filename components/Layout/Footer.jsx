import { Box, Container, Typography } from "@material-ui/core";

import NavButton from "./Nav/NavButton";
import SocialButton from "./Nav/SocialButton";

// high-level navigation, social media links, disclaimer
const Footer = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      component="footer"
    >
      <Box display="flex">
        <NavButton label="archive" href="/archive" />
        <NavButton label="bio" href="/bio" />
        <NavButton label="contact" href="/contact" />
        <SocialButton label="twitter" href={"twitter"} />
        <SocialButton label="linkedin" href={"linkedin"} />
      </Box>
      <Container maxWidth="sm">
        <Typography variant="caption" paragraph>
          As required by NY State, please note that "this letter may constitute
          attorney advertising. Prior results do not guarantee a similar
          outcome." The information provided in this letter does not, and is not
          intended to, constitute legal or investment advice.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
