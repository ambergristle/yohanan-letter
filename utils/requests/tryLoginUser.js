import Router from "next/router";
import axios from "axios";

// axios request with login details; triggers form error if invalid
// args passed from formik
const tryLoginUser = async (
  { email, password },
  { setFieldError },
  toggleLoggedIn
) => {
  try {
    const response = await axios.post("/api/users/login", { email, password });

    // redirect and set loggedIn state
    Router.push("/publish");
    return toggleLoggedIn();
  } catch (error) {
    if (error.response) {
      const { field, helperText } = error.response.data;

      return setFieldError(field, helperText); // set form or field errors
    }

    return setFieldError("login", "Request could not be proccessed"); // axios error
  }
};

export default tryLoginUser;
