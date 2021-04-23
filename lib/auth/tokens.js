import jwt from "jsonwebtoken";

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

// create new access or refresh token
const generateToken = (type, { email, role }) => {
  const secret = type ? ACCESS_TOKEN_SECRET : REFRESH_TOKEN_SECRET;
  const config = type ? { expiresIn: "60m" } : null;

  return jwt.sign({ email, role }, secret, config);
};

// refresh access token
const refreshToken = (refreshToken) => {
  jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return false;

    return generateToken(true, user);
  });
};

// authorization middleware, wraps api functions
const authenticateToken = (handler) => {
  return async (req, res) => {
    // extract access token
    const authHeader = req.headers["authorization"];
    const accessToken = authHeader?.split(" ")[1];

    if (!accessToken) return res.sendStatus(401);

    // verify token
    jwt.verify(accessToken, ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);

      // add user role to req
      req.auth = user.role;
      return handler(req, res);
    });
  };
};
