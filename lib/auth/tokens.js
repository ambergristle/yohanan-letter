import jwt from "jsonwebtoken";

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

// create new access or refresh token
export const generateToken = (access, { email, role }) => {
  const secret = access ? ACCESS_TOKEN_SECRET : REFRESH_TOKEN_SECRET;
  const config = access ? { expiresIn: "60m" } : null;

  return jwt.sign({ email, role }, secret, config);
};

// refresh access token
export const refreshAccessToken = (refreshToken) => {
  // if token invalid, trigger error
  jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return false;

    return generateToken(true, user);
  });
};

// authorization middleware, wraps request handlers
export const authorize = (handler) => {
  return async (req, res) => {
    // parse access token
    const authHeader = req.headers["authorization"];
    const accessToken = authHeader?.split(" ")[1];

    // if token missing, return error
    if (!accessToken) return res.status(401).json();

    // verify token
    jwt.verify(accessToken, ACCESS_TOKEN_SECRET, (err, user) => {
      // if token invalid, return error
      if (err) return res.sendStatus(403);

      // add user role to req
      req.auth = user.role;
      return handler(req, res);
    });
  };
};
