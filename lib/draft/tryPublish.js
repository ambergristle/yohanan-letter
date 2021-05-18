const tryPublish = async ({ draft }, { resetForm }) => {
  try {
    switch (a) {
      // reset form to initialValues; does not save
      case "clear":
        return resetForm();

      case "save":
        // const response = await axios.patch("/api/drafts", draft);
        // return response.status;
        return console.log(draft);

      case "schedule":
        // const response = await axios.post("/api/drafts", draft);
        // // // schedule
        // return response.status;
        return console.log(draft);
    }
  }
};

export default tryPublish;
