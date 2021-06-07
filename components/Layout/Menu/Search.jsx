import { useState } from "react";

import {
  TextField,
  InputAdornment,
  IconButton,
  makeStyles,
} from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";

import { useStore } from "../../../utils/store/store";

const useStyles = makeStyles((theme) => ({
  searchField: {
    marginLeft: theme.spacing(2),
    paddingLeft: "15px",
  },
}));

// filter displayed posts using regex
const Search = () => {
  const classes = useStyles();

  const searchTerm = useStore((state) => state.search);
  const setSearch = useStore((state) => state.setSearch);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <TextField
      placeholder="Search…"
      value={searchTerm}
      onChange={handleSearch}
      variant="outlined"
      margin="dense"
      InputProps={{
        "aria-label": "search",
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon color="secondary" />
          </InputAdornment>
        ),
      }}
      className={classes.searchField}
    />
  );
};

export default Search;
