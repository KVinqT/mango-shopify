import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import Colors from "../data/Color";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/900.css";

let theme = createTheme({
  palette: {
    primary: {
      main: Colors.primaryColor,
    },
    secondary: {
      main: Colors.secondaryColor,
    },
    error: {
      main: Colors.errorColor,
    },
  },
  typography: {
    fontFamily: [
      "Montserrat",
      "Poppins",
      "Ubuntu",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  components: {
    MuiSelect: {
      // we can override the deafult value of the components in MUI
      //eg. defaultOpen: false => true
      defaultProps: {},
      //we can override the default style of the components in MUI
      // in this case MUISelector
      styleOverrides: {
        //root is the outer-most element of a component
        root: {
          backgroundColor: Colors.soft,
        },
        //testing --> if i give the 'variant="filled"' props to the select component the below css will work
        filled: {
          backgroundColor: "black",
        },
      },
    },
  },
});

// returns a new theme with responsive typography
theme = responsiveFontSizes(theme, {
  factor: 3,
});
export default theme;
