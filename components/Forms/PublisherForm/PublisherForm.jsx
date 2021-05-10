import { v4 as uuid } from "uuid";
import { nextSunday, format, set } from "date-fns";

import { FieldArray } from "formik";

import FormikForm from "../FormikForm/FormikForm";
import FormikField from "../FormikForm/FormikField";
import FormikArray from "../FormikForm/FormikArray";
import FormikButton from "../FormikForm/FormikButton";

import PostItem from "./PostItem";

const makeSource = () => ({ title: "", href: "" });

const makePost = () => ({
  title: "",
  text: "",
  sources: Array.from({ length: 2 }, () => makeSource()),
  tags: [],
});

const initialValues = {
  date: "",
  subject: "The Yohanan Letter - Legal News for Investors and Entrepreneurs",
  intro: "",
  posts: Array.from({ length: 3 }, () => makePost()),
};

const PublisherForm = () => {
  const tryPublish = () => {};

  return (
    <FormikForm initialValues={initialValues} handleSubmit={tryPublish}>
      <FormikField
        name="subject"
        type="text"
        placeholder="The Yohanan Letter - Legal News for Investors and Entrepreneurs"
      />
      <FormikField
        name="intro"
        type="text"
        placeholder="This week I’m thinking about..."
        multiline
        rows={6}
      />
      <FormikArray name="posts">
        <PostItem />
      </FormikArray>
      <FormikButton type="submit" label="save" />
    </FormikForm>
  );
};

export default PublisherForm;
