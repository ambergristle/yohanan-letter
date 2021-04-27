// authenticate user with jwt
const auth = (req, res, next) => {
  const authorization = req.headers["authorization"];
  const token = authorization?.split(" ")[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, ACCESS_TOKEN_SECRET, (err, usr) => {
    if (error) return res.sendStatus(403);
  });

  req.user = usr;
  next();
};

module.exports = auth;
