import { v4 as uuid } from "uuid";
import { DateTime } from "luxon";

// programmatically generate empty sources and posts
export const makeSource = () => ({ id: uuid(), title: "", href: "" });

export const makePost = () => ({
  id: uuid(),
  title: "",
  text: "",
  sources: Array.from({ length: 2 }, () => makeSource()),
  tags: [],
});

// programmatically generate empty newsletter
const makeDate = () => {
  return DateTime.fromObject({
    hour: 8,
    minute: 0,
    second: 0,
    zone: "America/New_York",
  }).set({ weekday: 7 });
};

export const initialValues = {
  id: uuid(),
  date: makeDate(),
  subject: "The Yohanan Letter - Legal News for Investors and Entrepreneurs",
  intro: "",
  // posts: Array.from({ length: 3 }, () => makePost()),
  posts: Array.from({ length: 2 }, () => makePost()),
};
