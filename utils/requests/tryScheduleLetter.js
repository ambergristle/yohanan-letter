import client from "@sendgrid/client";

client.setApiKey(process.env.SENDGRID_SCHEDULE_API_KEY);

const createRequest = {
  method: "POST",
  url: "v3/marketing/singlesends",
};

const scheduleRequest = (id) => ({
  method: "PUT",
  url: `v3/marketing/singlesends/${id}/schedule`,
});

// schedule single-send
const tryScheduleLetter = async (letter) => {
  try {
    const [createResponse, createBody] = await client.request({
      body: letter,
      ...createRequest,
    });

    // const [scheduleResponse, scheduleBody] = await client.request({
    //   body: { send_at: createBody.send_at },
    //   ...scheduleRequest(createBody.id),
    // });

    return createResponse.statusCode;
  } catch (error) {
    if (error.response) {
      console.log(error.code);
      // console.error(error.response.body);
      return error.code;
    }
    return 500;
  }
};

export default tryScheduleLetter;
