import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#ffcdd2",
      light: "#ffffff",
      dark: "#ccb9b9",
    },
    secondary: {
      main: "#fff0ca",
      light: "#ffffff",
      dark: "#ccc7bb",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    info: {
      main: "#42a5f5",
      dark: "#01579b",
    },
    success: {
      main: "#66bb6a",
      light: "#c5e1a5",
      dark: "#33691e",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
});

export default Theme;
