import client from "@sendgrid/client";
import axios from "axios";

client.setApiKey(process.env.SENDGRID_SCHEDULE_API_KEY);

const request = {
  method: "GET",
  url: "v3/marketing/singlesends",
};

// schedule single-send
const trySchedule = async (letter) => {
  try {
    const [response, body] = await client.request({ body: letter, ...request });

    return response.statusCode;
  } catch (error) {
    if (error.response) {
      console.error(error.response.body);
      return error.code;
    }
    return 500;
  }
};

export default trySchedule;
