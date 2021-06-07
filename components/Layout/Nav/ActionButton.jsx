import { Button } from "@material-ui/core";

const ActionButton = ({ onClick, label, endIcon, ...props }) => {
  return (
    <Button
      {...props}
      onClick={onClick}
      variant="contained"
      color="primary"
      size="medium"
      disableElevation
      endIcon={endIcon}
    >
      {label}
    </Button>
  );
};

export default ActionButton;
