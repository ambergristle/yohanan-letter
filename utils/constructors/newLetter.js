import pug from "pug";
import { DateTime } from "luxon";

import { segments, styles, strong, text } from "../constants/letter";
const pugPath = "lib/constructors/template.pug";

const toCamel = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const newLetter = ({ date, subject, intro, posts, ...draft }) => {
  const template = pug.compileFile(pugPath);

  const shortDate = DateTime.fromISO(date).toFormat("LL/dd/yy");
  const longDate = DateTime.fromISO(date).toLocaleString(DateTime.DATE_FULL);

  const makeLetter = (theme) => {
    const letterData = {
      styles: { ...styles.all, ...styles[theme] },
      text: text,
      letter: {
        date: longDate,
        intro: intro.replace("<strong>", strong["theme"]),
        posts: posts.map((post) => post.replace("<strong>", strong["theme"])),
        ...draft,
      },
    };

    return {
      name: `${shortDate} - ${toCamel(theme)}`,
      send_at: date,
      send_to: {
        segment_ids: [segments[theme]],
      },
      email_config: {
        subject: subject,
        html_content: template(letterData),
        generate_plain_content: true,
        editor: "code",
        suppression_group_id: -1,
        sender_id: 1320321,
      },
    };
  };

  return [makeLetter("dark"), makeLetter("light")];
};

export default newLetter;
