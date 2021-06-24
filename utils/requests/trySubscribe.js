import client from "@sendgrid/client";

client.setApiKey(process.env.SENDGRID_SCHEDULE_API_KEY);

const request = {
  method: "PUT",
  url: "v3/marketing/contacts",
};

const trySubscribe = async (contact) => {
  try {
    const [response, body] = await client.request({
      body: [contact],
      ...createRequest,
    });

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

export default trySubscribe;
