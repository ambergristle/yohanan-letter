import { Grid, Typography, Link } from "@material-ui/core";

import FeedbackForm from "../components/Forms/FeedbackForm";

export default function Contact() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={5}>
        <Typography color="textPrimary">
          Thank you for reading. If you like the newsletter or know someone that
          needs to see it, please do not hesitate to forward and ask them to
          subscribe.
        </Typography>
        <Typography color="textPrimary">
          If you have any feedback for me, suggestions for future topics, or
          would like to collaborate, please don't hesitate to contact me through
          this form, or at{" "}
          <Link href="mailto:hello@yohananletter.com">
            hello@yohananletter.com
          </Link>
          .
        </Typography>
      </Grid>
      <Grid item xs={12} sm={7}>
        <FeedbackForm />
      </Grid>
    </Grid>
  );
}
