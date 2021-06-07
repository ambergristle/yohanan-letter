import { Grid, Box, Typography, Link, makeStyles } from "@material-ui/core";

import FeedbackForm from "../components/Forms/FeedbackForm";

const useStyles = makeStyles((theme) => ({
  contactGrid: { position: "absolute", top: "25%" },
}));

export default function Contact() {
  const { contactGrid } = useStyles();

  return (
    <Grid container spacing={3} alignItems="center">
      <Grid item xs={12} />
      <Grid item xs={12} sm={5}>
        <Box p="5%">
          <Typography color="textPrimary" align="justify" paragraph>
            Thank you for reading. If you like the newsletter or know someone
            that needs to see it, please do not hesitate to forward and ask them
            to subscribe.
          </Typography>
          <Typography color="textPrimary" align="justify">
            If you have any feedback for me, suggestions for future topics, or
            would like to collaborate, please don't hesitate to contact me
            through this form, or at{" "}
            <Link href="mailto:hello@yohananletter.com">
              hello@yohananletter.com
            </Link>
            .
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={7}>
        <FeedbackForm />
      </Grid>
    </Grid>
  );
}
