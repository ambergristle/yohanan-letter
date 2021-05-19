import client from "@sendgrid/client";

client.setApiKey(process.env.SENDGRID_SCHEDULE_API_KEY);

const schedule = async (req, res) => {
  if (!req.body) return res.status(400).end();
  const letter = req.body;
  console.log(letter);

  const request = {
    method: "POST",
    url: "/v3/marketing/singlesends",
    body: data,
  };

  try {
    console.log(letter);
    return res.status(200).end();
  } catch (error) {
    if (error.response) {
      console.error(error.response.body);
      return res.status(error.response.status).end();
    }
    console.error(error);
    return res.status(500).end();
  }
};

export default schedule;
