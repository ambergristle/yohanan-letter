import { Box, Button, CircularProgress, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  submitting: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
    opacity: "50%",
  },
}));

const Scratch = () => {
  const { submitting } = useStyles();
  const isSubmitting = true;
  return (
    <Box display="flex" alignItems="center">
      <Box position="relative">
        <Button
          variant="contained"
          color="primary"
          disabled={true}
          disableElevation
        >
          login
        </Button>
        {isSubmitting && (
          <CircularProgress
            size={24}
            color="secondary"
            className={submitting}
          />
        )}
      </Box>
    </Box>
  );
};

export default Scratch;
