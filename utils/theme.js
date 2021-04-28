import { createMuiTheme } from "@material-ui/core/styles";

// background: #222222 "rgba(34, 34, 34, 1)"
// silver text: #eeeeee "rgba(238, 238, 238, 1)"
// gold text: #fcdab7 "rgba(252, 218, 183, 1)"
// blue text: #3282b8 "rgba(50, 130, 184, 1)"
// header text: Lucida Grande
// body text: Helvetica

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "rgba(252, 218, 183, 1)",
      main: "rgba(252, 218, 183, 1)",
      dark: "rgba(252, 218, 183, 1)",
    },
    secondary: {
      light: "rgba(238, 238, 238, 1)",
      main: "rgba(238, 238, 238, 1)",
      dark: "rgba(238, 238, 238, 1)",
    },
    background: {
      paper: "rgba(34, 34, 34, 1)",
    },
    text: {
      primary: "rgba(238, 238, 238, 1)",
      secondary: "rgba(252, 218, 183, 1)",
    },
  },
  typography: {
    fontFamily: ["Lato", "sans-serif"].join(","),
  },
  overrides: {
    Mui: {
      root: {
        "&$disabled": {
          color: "rgba(238, 238, 238, 0.5)",
        },
      },
    },
    MuiFormControl: {
      marginDense: { marginTop: 0 },
    },
    MuiInputBase: {
      root: {
        backgroundColor: "rgba(51, 51, 51, 1)",
        "&:disabled": {
          color: "rgba(238, 238, 238, 0.5)",
        },
      },
      input: {
        "&::placeholder": {
          color: "rgba(238, 238, 238, 0.5)",
        },
      },
    },
    MuiButton: {
      root: {
        "&:hover": {
          backgroundColor: "transparent",
          color: "rgba(252, 218, 183, 1)",
        },
      },
      containedPrimary: {
        "&:hover": {
          backgroundColor: "rgba(252, 218, 183, 0.5)",
          color: "rgba(34, 34, 34, 1)",
        },
      },
    },
    MuiIconButton: {
      root: {
        "&:disabled": {
          color: "rgba(51, 51, 51, 1)",
        },
        "&$colorPrimary:hover": {
          backgroundColor: "transparent",
          color: "rgba(252, 218, 183, 0.5)",
        },
        "&$colorSecondary:hover": {
          backgroundColor: "transparent",
          color: "rgba(252, 218, 183, 1)",
        },
      },
    },
    MuiFab: {
      primary: {
        backgroundColor: "rgba(50, 130, 184, 1)",
        color: "rgba(238, 238, 238, 1)",
        "&:hover": {
          backgroundColor: "rgba(80, 159, 211, 1)",
        },
      },
    },
    MuiChip: {
      root: {
        backgroundColor: "rgba(50, 130, 184, 1)",
        color: "rgba(238, 238, 238, 1)",
      },
      clickable: {
        "&:hover": {
          backgroundColor: "rgba(50, 130, 184, 0.5)",
        },
      },
    },
    MuiTypography: {
      caption: {
        color: "rgba(238, 238, 238, 0.5)",
      },
    },
  },
});

export default theme;
