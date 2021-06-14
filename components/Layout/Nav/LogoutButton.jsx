import { Button } from "@material-ui/core";

import { useStore } from "../../../utils/store/store";
import tryLogoutUser from "../../../utils/requests/tryLogoutUser";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const LogoutButton = (props) => {
  const setLoggedIn = useStore((state) => state.setLoggedIn);

  const handleLogout = (values, actions) =>
    tryLogoutUser(values, actions, setLoggedIn);

  return (
    <Button
      {...props}
      onClick={handleLogout}
      variant="contained"
      color="primary"
      size="medium"
      disableElevation
      endIcon={<ExitToAppIcon />}
    >
      logout
    </Button>
  );
};

export default LogoutButton;
