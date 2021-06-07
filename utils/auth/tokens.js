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
  // if token invalid, trigger error, else return new access token
  const newAccessToken = jwt.verify(
    refreshToken,
    REFRESH_TOKEN_SECRET,
    (err, user) => {
      if (err) return false;

      return generateToken(true, user);
    }
  );

  return newAccessToken;
};

// authorization middleware, wraps request handlers
export const authorize = (handler, adminRequired) => {
  return async (req, res) => {
    // parse refresh token
    const refreshToken = req.cookies.jid;

    // if token missing, return error
    if (!refreshToken) return res.status(401).json({});

    // verify token
    await jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err, user) => {
      // if token invalid, return error
      if (err) return res.status(403).end();

      // if token invalid, return error

      if (adminRequired && user.role !== "ADMIN") {
        return res.status(401).end();
      }

      return handler(req, res, refreshToken);
    });
  };
};
