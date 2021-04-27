import axios from "axios";

// axios request with login details; triggers form error if invalid
const tryLogin = async ({ email, password }, setSubmitting, setFieldError) => {
  try {
    const response = await axios.post("/api/users/login", {
      email,
      password,
    });

    // redirect
    console.log("success!");
    return response.status;
  } catch (error) {
    if (error.response) {
      const { field, helperText } = error.response.data;
      return setFieldError(field, helperText); // set form or field errors
    }

    return setFieldError("login", "Request could not be proccessed"); // axios error
  }
};

export default tryLogin;
