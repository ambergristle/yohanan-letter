// sendgrid style segments
export const segments = {
  dark: "b409d5d8-c9bf-4e4f-9a4e-13defe1a032c",
  light: "1673fcec-6b4a-498e-bef4-f6e3eae050c6",
};

//  modular styles injected in pug template
export const styles = {
  all: {
    fontPrimary: "'Helvetica', sans-serif",
    fontSecondary: "'Lucida Grande', sans-serif",
  },
  dark: {
    background: "rgba(34, 34, 34, 1)",
    colorPrimary: "rgba(238, 238, 238, 1)",
    colorSecondary: "rgba(252, 218, 183, 1)",
    colorTertiary: "rgba(50, 130, 184, 1)",
  },
  light: {
    background: "rgba(241, 246, 249, 1)",
    colorPrimary: "rgba(20, 39, 78, 1)",
    colorSecondary: "rgba(20, 39, 78, 1)",
    colorTertiary: "rgba(50, 130, 184, 1)",
  },
  combined: {
    background: "rgba(241, 246, 249, 1)",
    colorPrimary: "rgba(20, 39, 78, 1)",
    colorSecondary: "rgba(20, 39, 78, 1)",
    colorTertiary: "rgba(50, 130, 184, 1)",
  },
};

// modular bold (content) styling
export const strong = {
  dark: "<strong style='color: rgba(252, 218, 183, 1)'>",
  light: "<strong>",
  combined: "<strong>",
};

export const link = {
  dark: (href, text) =>
    `<a href="${href}" style="color: rgba(50, 130, 184, 1)" target="_blank">${text}</a>`,
  light: (href, text) =>
    `<a href="${href}" style="color: rgba(50, 130, 184, 1)" target="_blank">${text}</a>`,
  combined: (href, text) =>
    `<a href="${href}" style="color: rgba(50, 130, 184, 1)" target="_blank">${text}</a>`,
};

//  constant text injected in pug template
export const context = {
  bio:
    "Adam Yohanan is a corporate finance lawyer at an international law firm based in New York. Adam represents borrowers and lenders in a variety of transactions, with an emphasis on leveraged and acquisition finance. Before entering private practice, Adam interned with the SEC Enforcement Division and the U.S. District Court for the Southern District of New York. Adam earned his law degree from Georgetown in 2019 and graduated summa cum laude from Tulane in 2016.",
  appeal:
    "Thank you for reading. If you like the newsletter or know someone that needs to see it, please do not hesitate to forward and ask them to subscribe.",
  disclaimer:
    "As required by NY State, please note that this email may constitute attorney advertising. Prior results do not guarantee a similar outcome. The information provided in this email does not, and is not intended to, constitute legal or investment advice.",
};
