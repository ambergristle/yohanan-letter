import { v4 as uuid } from "uuid";
import { DateTime } from "luxon";

import { FieldArray } from "formik";

import FormikForm from "../FormikForm/FormikForm";
import FormikDate from "../FormikForm/FormikDate";
import FormikField from "../FormikForm/FormikField";
import FormikArray from "../FormikForm/FormikArray";
import FormikButton from "../FormikForm/FormikButton";

import PostItem from "./PostItem";

import FormikValues from "../FormikForm/FormikValues";

const makeSource = () => ({ title: "", href: "" });

const makePost = () => ({
  title: "",
  text: "",
  sources: Array.from({ length: 2 }, () => makeSource()),
  tags: [],
});

const makeDate = () => {
  return DateTime.fromObject({
    hour: 8,
    minute: 0,
    second: 0,
    zone: "America/New_York",
  }).set({ weekday: 7 });
};

const initialValues = {
  date: makeDate(),
  subject: "The Yohanan Letter - Legal News for Investors and Entrepreneurs",
  intro: "",
  posts: Array.from({ length: 3 }, () => makePost()),
};

const PublisherForm = () => {
  const tryPublish = () => {};

  return (
    <FormikForm initialValues={initialValues} handleSubmit={tryPublish}>
      <FormikDate name="date" format="MMMM dd @ HH:mm ZZZZ" />
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
      <FormikValues />
    </FormikForm>
  );
};

export default PublisherForm;
