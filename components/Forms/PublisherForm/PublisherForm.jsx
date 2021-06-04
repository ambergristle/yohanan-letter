import { useState } from "react";
import * as yup from "yup";

import {
  makeSource,
  makePost,
} from "../../../utils/constructors/initialValues";

import FormikForm from "../FormikForm/FormikForm";
import FormikField from "../FormikForm/FormikField";
import FormikQuill from "../FormikForm/FormikQuill";
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

// input requirements; error messages disabled
const validationSchema = yup.object({
  subject: yup.string().required(""),
  intro: yup
    .string()
    .matches(/(?!<p><br><\/p>)/)
    .required(""),
  posts: yup.array().of(
    yup.object({
      title: yup.string().required(""),
      text: yup
        .string()
        .matches(/(?!<p><br><\/p>)/)
        .required(""),
      sources: yup.array().of(
        yup.object({
          title: yup.string().required(""),
          href: yup.string().required(""),
        })
      ),
    })
  ),
});

// edit and schedule newsletter drafts
const PublisherForm = ({ draft }) => {
  const [tagOptions, setTagOptions] = useState(tags);

  return (
    <FormikForm initialValues={draft} validationSchema={validationSchema}>
      <Controls />
      <FormikField
        name="subject"
        type="text"
        placeholder="The Yohanan Letter - Legal News for Investors and Entrepreneurs"
      />
      <FormikQuill
        name="intro"
        placeholder="This week I’m thinking about..."
        className="intro"
      />
      <FormikArray name="posts">
        <PostItem tagOptions={tagOptions} setTagOptions={setTagOptions} />
      </FormikArray>
      <FormikValues />
    </FormikForm>
  );
};

export default PublisherForm;
