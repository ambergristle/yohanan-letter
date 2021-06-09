import client from "@sendgrid/client";

client.setApiKey(process.env.SENDGRID_SCHEDULE_API_KEY);

const request = {
  method: "POST",
  url: "v3/marketing/singlesends",
};

// schedule single-send
const trySchedule = async (letter) => {
  console.log(letter);
  try {
    const [response, body] = await client.request({
      body: letter,
      ...request,
    });

    return response.statusCode;
  } catch (error) {
    if (error.response) {
      console.log(error.code);
      // console.error(error.response.body);
      return error.code;
    }
    return 500;
  }
};

export default trySchedule;
