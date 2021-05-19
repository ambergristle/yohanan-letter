import axios from "axios";
import { DateTime } from "luxon";

const newLetter = (draft) => {
  const segments = {
    dark: "b409d5d8-c9bf-4e4f-9a4e-13defe1a032c",
    light: "1673fcec-6b4a-498e-bef4-f6e3eae050c6",
  };

  const dateString = DateTime.fromISO(draft.date).toFormat("LL/dd/yy");
  const name = `${dateString} - ${theme}`;

  const letter = {
    name: name,
    send_at: date,
    send_to: {
      segment_ids: [segment],
    },
    email_config: {
      subject: subject,
      html_content: content,
      generate_plain_content: true,
      editor: "code",
      suppression_group_id: -1,
      sender_id: 1320321,
    },
  };
};

const trySchedule = async (draft, { setSubmitting, resetForm }) => {
  // const message = newLetter(draft);

  try {
    // const response = await axios.post("/api/emails/send", message);
    // resetForm();
    setSubmitting(false);
    // return response.status;
  } catch (error) {
    if (error.response) {
      console.error(error.response.status);
    }
    console.error(error);
    setSubmitting(false);
    return setFieldError("feedback", "Request could not be proccessed"); // axios error;
  }
};

export default trySchedule;
