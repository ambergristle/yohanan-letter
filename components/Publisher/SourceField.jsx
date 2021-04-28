import React from "react";

const SourceField = () => {
  return (
    <>
      <TextField
        name="title"
        placeholder="Publication - Article Title"
        value={title}
        onChange={handleChange}
        fullWidth
        variant="outlined"
        margin="dense"
      />
      <TextField
        name="href"
        placeholder="https://www.source-site.com/"
        value={href}
        onChange={handleChange}
        fullWidth
        variant="outlined"
        margin="dense"
      />
    </>
  );
};

export default SourceField;
