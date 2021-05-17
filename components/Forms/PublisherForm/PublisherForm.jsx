import { useState } from "react";

import {
  makeSource,
  makePost,
  initialValues,
} from "../../../lib/initialValues";

import FormikForm from "../FormikForm/FormikForm";
import FormikField from "../FormikForm/FormikField";
import FormikArray from "../FormikForm/FormikArray";
import FormikButton from "../FormikForm/FormikButton";

import Controls from "./Controls";
import PostItem from "./PostItem";

import { v4 as uuid } from "uuid";
import FormikValues from "../FormikForm/FormikValues";

const tags = [
  { id: uuid(), name: "first" },
  { id: uuid(), name: "second" },
  { id: uuid(), name: "third" },
];

// edit and schedule newsletter drafts
const PublisherForm = ({ draft }) => {
  const [tagOptions, setTagOptions] = useState(tags);
  const tryPublish = () => {};

  return (
    <FormikForm initialValues={initialValues} handleSubmit={tryPublish}>
      <Controls />
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
        <PostItem tagOptions={tagOptions} setTagOptions={setTagOptions} />
      </FormikArray>
      <FormikValues />
    </FormikForm>
  );
};

export default PublisherForm;
