import mail from "@sendgrid/mail";

mail.setApiKey(process.env.SENDGRID_SEND_API_KEY);

// send feedback email via sendgrid
const send = async (req, res) => {
  if (!req.body) return res.status(400).end();
  const message = req.body;

  try {
    mail.send(message);
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

export default send;
