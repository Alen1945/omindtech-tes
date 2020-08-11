import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

// Create a theme instance.
const defaultTheme = {
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#e5e5e5",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#e5e5e5",
    },
  },
};
const theme = createMuiTheme(defaultTheme);
export default theme;
