import { v4 as uuid } from "uuid";
import { DateTime } from "luxon";

// programmatically generate empty sources and posts
export const makeSource = () => ({ id: uuid(), title: "", href: "" });

export const makePost = (date) => ({
  id: uuid(),
  draft: true,
  date: date,
  title: "",
  text: "",
  sources: Array.from({ length: 2 }, () => makeSource()),
  tags: [],
});

// programmatically generate empty newsletter
const makeDate = () => {
  // const today = DateTime.local();

  const sunday = DateTime.fromObject({
    hour: 8,
    minute: 0,
    second: 0,
    zone: "America/New_York",
  }).set({ weekday: 7 });

  // if (today.weekday == 7) return sunday.plus({ weeks: 1 });

  return sunday;
};

const makeDraft = () => {
  const date = makeDate();
  return {
    id: uuid(),
    draft: true,
    date: date,
    subject: "The Yohanan Letter - Legal News for Investors and Entrepreneurs",
    intro: "",
    posts: Array.from({ length: 1 }, () => makePost(date)),
    outro: "",
  };
};

export const initialValues = makeDraft();
