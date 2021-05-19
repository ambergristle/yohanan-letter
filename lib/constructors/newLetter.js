import pug from "pug";
import { DateTime } from "luxon";

import pugTemplate from "../constructors/template";
import { styles, text } from "../constants/letter";

const segments = {
  dark: "b409d5d8-c9bf-4e4f-9a4e-13defe1a032c",
  light: "1673fcec-6b4a-498e-bef4-f6e3eae050c6",
};

const newLetter = ({ date, subject, ...draft }) => {
  const template = pug.compileFile("../constructors/template");

  const shortDate = DateTime.fromISO(date).toFormat("LL/dd/yy");
  const longDate = DateTime.fromISO(date).toLocaleString(DateTime.DATE_FULL);

  const makeLetter = (theme) => {
    const letterData = {
      styles: { ...styles.all, ...styles[theme] },
      text: text,
      letter: { date: longDate, ...draft },
    };

    return {
      name: `${shortDate} - ${theme}`,
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
