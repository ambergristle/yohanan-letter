import axios from "axios";

// save draft
const saveDraft = async (draft, setSubmitting, setFieldError) => {
  console.log(draft);
  // try {
  //   const response = await axios.patch("/api/drafts", draft);
  //   return response.status;
  // } catch (error) {
  //   if (error.response) {
  //     return error.response.status;
  //   }
  //   return setFieldError("save", "Save failed"); // axios error
  // }
};

export default saveDraft;
