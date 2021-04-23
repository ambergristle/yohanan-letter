export default async (req, res) => {
  if (!req.body) return res.sendStatus(400);

  switch (req.method) {
    case "POST":
      // login
      login(req, res);
      break;
    case "PATCH":
      // refresh
      refresh(req, res);
      break;
    case "DELETE":
      // logout
      logout(req, res);
      break;
    default:
      return res.sendStatus(405);
  }
};
