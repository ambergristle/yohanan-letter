import { DateTime } from "luxon";
import pug from "pug";

import { segments, styles, strong, link, context } from "../constants/letter";
const pugPath = "utils/constructors/template.pug";

// convert first char in string to upper
const toCamel = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const styleText = (content, strong, link, theme) => {
  const regex = /<a href="(?<href>.*?[^?])?".*?>(?<text>.*?[^?])?<\/a>/g;
  const styleLinks = (html) =>
    html.replace(regex, (_m, href, text) => link[theme](href, text));

  const html = content.replace(/<strong>/g, strong[theme]);
  return styleLinks(html);
};

const newLetter = ({ date, subject, intro, posts, outro, ...draft }) => {
  const template = pug.compileFile(pugPath);

  // convert date to mm/dd/yy
  const shortDate = DateTime.fromObject(date).toFormat("LL/dd/yy");

  // convert date to zoned stamp
  const longDate = DateTime.fromObject(date).toLocaleString(DateTime.DATE_FULL);

  const makeLetter = (theme) => {
    const letterData = {
      styles: { ...styles.all, ...styles[theme] },
      context: context,
      letter: {
        date: longDate,
        intro: styleText(intro, strong, link, theme),
        posts: posts.map(({ text, ...post }) => ({
          text: styleText(text, strong, link, theme),
          ...post,
        })),
        outro: styleText(outro, strong, link, theme),
        ...draft,
      },
    };

    return {
      // name: `${shortDate} - ${toCamel(theme)}`,
      name: `${shortDate} - Combined`,
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

  // return [makeLetter("dark"), makeLetter("light")];
  return [makeLetter("light")];
};

export default newLetter;
