import { Button } from "@material-ui/core";

import tryLogout from "../../../utils/requests/tryLogout";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const LogoutButton = (props) => {
  return (
    <Button
      {...props}
      onClick={tryLogout}
      variant="contained"
      color="primary"
      disableElevation
      endIcon={<ExitToAppIcon />}
    >
      logout
    </Button>
  );
};

export default LogoutButton;
