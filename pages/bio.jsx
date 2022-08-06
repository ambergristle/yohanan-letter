import Image from "next/image";

import { Grid, Typography, makeStyles } from "@material-ui/core";

const Bio = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={3}>
        <Image
          src="/adam.jpeg"
          layout="responsive"
          width={500}
          height={500}
          priority
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={9}
        container
        direction="column"
        justify="space-around"
      >
        <Typography variant="h6" color="textPrimary" align="justify">
          Adam Yohanan is a lending transactions attorney at an international
          bank based in New York City.
        </Typography>
        <Typography variant="h6" color="textPrimary" align="justify">
          Prior to joining the bank, Adam was a finance associate at two
          top-ranked international law firms, where he represented private
          equity funds, private credit funds, public companies, and investment
          banks in multi-billion dollar U.S. and cross border transactions.
        </Typography>
        <Typography variant="h6" color="textPrimary" align="justify">
          Before entering private practice, Adam interned with the SEC
          Enforcement Division and the U.S. District Court for the Southern
          District of New York. Adam earned his law degree from Georgetown in
          2019 and graduated summa cum laude from Tulane in 2016.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Bio;
