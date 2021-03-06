import { IconButton } from "@material-ui/core";

import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

// wrap IconButton (social) in Link
const SocialButton = ({ label }) => {
  const icons = {
    twitter: <TwitterIcon />,
    linkedin: <LinkedInIcon />,
  };
  const urls = {
    twitter: "https://www.twitter.com/adamyohanan",
    linkedin: "https://www.linkedin.com/in/adamyohanan",
  };
  return (
    <IconButton
      aria-label={label}
      href={urls[label]}
      target="_blank"
      color="secondary"
      disableRipple
    >
      {icons[label]}
    </IconButton>
  );
};

export default SocialButton;
