import { useState, useEffect } from "react";

import { useStore } from "../../../utils/store/store";

import { Box, Chip, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  tagFilters: { width: "50%" },
}));

const Filter = () => {
  const { tagFilters } = useStyles();

  const tags = useStore((state) => state.tags);

  return (
    <Box
      width="50%"
      display="flex"
      justifyContent="space-around"
      alignItems="center"
    >
      {tags?.map(({ id, name }) => (
        <Chip key={id} name={id} label={name} size="small" clickable />
      ))}
    </Box>
  );
};

export default Filter;
