import client from "@sendgrid/client";
import mail from "@sendgrid/mail";

client.setApiKey(process.env.SENDGRID_SCHEDULE_API_KEY);

mail.setApiKey(process.env.SENDGRID_SEND_API_KEY);

// schedule single-send
const tryScheduleLetter = async (letter) => {
  try {
    // create single send
    const [createResponse, createBody] = await client.request({
      method: "POST",
      url: "v3/marketing/singlesends",
      body: letter,
    });

    // extract values for testing
    const { subject, html_content } = createBody.email_config;

    // send test email
    const [response] = await mail.send({
      from: "adam@yohananletter.com",
      to: ["aristospanos@gmail.com"],
      subject: `${subject} - TEST`,
      html: html_content,
    });

    // schedule single send
    const [scheduleResponse, scheduleBody] = await client.request({
      method: "PUT",
      url: `v3/marketing/singlesends/${createBody.id}/schedule`,
      body: { send_at: createBody.send_at },
    });

    return scheduleResponse.statusCode;
  } catch (error) {
    console.log(error);
    if (error.response) {
      // console.error(error.response.body);
      return error.code;
    }
    return 500;
  }
};

export default tryScheduleLetter;
