import cookie from "cookie";

const PROD = process.env.NODE_ENV !== "development";

export const setCookie = (res, refreshToken) => {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("token", refreshToken, {
      httpOnly: true,
      secure: PROD,
      sameSite: true,
      path: "/",
      maxAge: 60 * 60 * 24,
    })
  );
};

export const deleteCookie = (res) => {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("token", "", {
      httpOnly: true,
      secure: PROD,
      sameSite: true,
      path: "/",
      expires: new Date(0),
    })
  );
};
