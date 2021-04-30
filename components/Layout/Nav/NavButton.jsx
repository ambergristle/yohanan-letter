import Link from "next/link";

import { Button } from "@material-ui/core";

const NavButton = ({ label, href }) => {
  return (
    <Link href={href} passHref>
      <Button disableRipple>{label}</Button>
    </Link>
  );
};

export default NavButton;
