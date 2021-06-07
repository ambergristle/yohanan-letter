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
          Adam Yohanan is a corporate finance lawyer at an international law
          firm based in New York. Adam represents borrowers and lenders in a
          variety of transactions, with an emphasis on leveraged and acquisition
          finance. Before entering private practice, Adam interned with the SEC
          Enforcement Division and the U.S. District Court for the Southern
          District of New York. Adam earned his law degree from Georgetown in
          2019 and graduated summa cum laude from Tulane in 2016.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Bio;
