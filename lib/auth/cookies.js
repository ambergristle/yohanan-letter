import cookie from "cookie";

const PROD = process.env.NODE_ENV !== "development";

// set http-only cookie that expires in one day
export const setCookie = (res, refreshToken) => {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("jid", refreshToken, {
      httpOnly: true,
      secure: PROD,
      sameSite: true,
      path: "/",
      maxAge: 60 * 60 * 24,
    })
  );
};

// domain: ".example.com"

// erase cookie by resetting expiration to past
export const deleteCookie = (res) => {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("jid", "", {
      httpOnly: true,
      secure: PROD,
      sameSite: true,
      path: "/",
      expires: new Date(0),
    })
  );
};
