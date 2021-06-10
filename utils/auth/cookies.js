import cookie from "cookie";

const PROD = process.env.NODE_ENV !== "development";

// jid, refreshToken, true
// set cookie that expires in one day
export const setCookie = (res, name, value, httpOnly) => {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize(name, value, {
      httpOnly: httpOnly,
      secure: PROD,
      sameSite: true,
      path: "/",
      maxAge: 60 * 60 * 24,
    })
  );
};

// erase cookie by resetting expiration to past
export const deleteCookie = (res, name, httpOnly) => {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize(name, "", {
      httpOnly: httpOnly,
      secure: PROD,
      sameSite: true,
      path: "/",
      expires: new Date(0),
    })
  );
};
