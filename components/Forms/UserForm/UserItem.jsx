import { useState, useMemo, forwardRef } from "react";
import { useField } from "formik";
import { v4 as uuid } from "uuid";

import {
  Box,
  Grid,
  Paper,
  TextField,
  IconButton,
  Button,
  makeStyles,
} from "@material-ui/core";

import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";

import FormikSelect from "../FormikForm/FormikSelect";
import FormikField from "../FormikForm/FormikField";
import FormikValues from "../FormikForm/FormikValues";

const useStyles = makeStyles((theme) => ({
  userSelectField: {
    "& .MuiOutlinedInput-input": {
      paddingTop: "8px",
      paddingBottom: "8px",
    },
    "&.MuiInputBase-root.Mui-disabled": {
      backgroundColor: "transparent",
      "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
      "& .MuiSelect-icon": {
        visibility: "hidden",
      },
    },
  },
  userTextField: {
    marginBottom: "0",
    "& .MuiOutlinedInput-root.Mui-disabled": {
      backgroundColor: "transparent",
      color: "rgba(238, 238, 238, 1)",
      "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
    },
  },
  addUserButton: {
    alignSelf: "flex-end",
    marginTop: "10px",
  },
}));

const UserItem = ({ index, name, only, last, handleAdd, handleDel }) => {
  const { userSelectField, userTextField, addUserButton } = useStyles();

  const [editing, setEditing] = useState(!email || false);
  const toggleEditing = () => setEditing(!editing);

  const roleOptions = ["ADMIN", "STAFF"];

  const [field, { value, initialValue }, helpers] = useField(name);

  const { id, role, email, password } = value;

  const addUser = () => {
    handleAdd({
      id: uuid(),
      role: "STAFF",
      email: "",
      password: "",
    });
  };

  const saveUser = () => {
    // if new user, post
    if (!initialValue) {
      console.log("new", { id, role, email, password });
      return;
    }

    // else, check which values updated
    const roleChanged = role !== initialValue?.role;
    const emailChanged = email !== initialValue?.email;
    const passwordChanged = password ? true : false;

    // create object with updated field(s) only
    const updatedField = {
      id,
      ...(roleChanged && { role }),
      ...(emailChanged && { email }),
      ...(passwordChanged && { password }),
    };

    console.log(roleChanged, emailChanged, passwordChanged);
    console.log(updatedField);

    toggleEditing();
  };

  const delUser = () => {
    // const userDeleted = tryDelUser();
    handleDel(index);
  };

  return (
    <Box display="flex" flexDirection="column" mb="10px">
      <Paper variant="outlined">
        <Grid container alignItems="center">
          <Grid item sm={1}>
            <FormikSelect
              name={`${name}.role`}
              options={roleOptions}
              className={userSelectField}
              disabled={!editing}
            />
          </Grid>
          <Grid item sm={5}>
            <FormikField
              name={`${name}.email`}
              placeholder={editing ? "email" : ""}
              className={userTextField}
              disabled={!editing}
            />
          </Grid>
          <Grid item sm={5}>
            <FormikField
              name={`${name}.password`}
              placeholder={editing ? "password" : ""}
              className={userTextField}
              disabled={!editing}
            />
          </Grid>

          <IconButton
            color="primary"
            onClick={editing ? saveUser : toggleEditing}
          >
            {editing ? <SaveIcon /> : <EditIcon />}
          </IconButton>

          <IconButton
            color="primary"
            disabled={only || !editing}
            onClick={delUser}
          >
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Paper>
      {last && (
        <Button
          variant="contained"
          color="primary"
          className={addUserButton}
          onClick={addUser}
        >
          add user
        </Button>
      )}
    </Box>
  );
};

export default UserItem;
