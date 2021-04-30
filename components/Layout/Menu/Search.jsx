import { useState } from "react";

import {
  TextField,
  InputAdornment,
  IconButton,
  makeStyles,
} from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  searchField: {
    marginLeft: theme.spacing(2),
    paddingLeft: "15px",
  },
}));

export default function Search() {
  const classes = useStyles();

  const [values, setValues] = useState({
    searchTerm: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <TextField
      placeholder="Search…"
      value={values.searchTerm}
      onChange={handleChange("searchTerm")}
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
}
