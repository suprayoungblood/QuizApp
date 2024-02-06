// Importing the createTheme function from Material-UI to customize the default theme.
import { createTheme } from "@mui/material/styles";

// Creating a custom theme using the createTheme function.
const theme = createTheme({
  // Defining the color palette for the theme.
  palette: {
    // Setting the primary color scheme.
    primary: {
      main: "#F4F6FA", // A light grayish color used as the primary theme color.
    },
    // Setting the secondary color scheme.
    secondary: {
      main: "#FFFFFF", // White color used as the secondary theme color.
    },
    // Defining the default background color.
    background: {
      default: "#F4F6FA", // The same light grayish color as primary, for consistency.
    },
  },
  // Customizing Material-UI components globally.
  components: {
    // Overriding styles for the CssBaseline component.
    MuiCssBaseline: {
      styleOverrides: {
        // Applying a global style override to the body element.
        body: {
          backgroundColor: "#F4F6FA", // Ensuring the body background matches the theme's default background.
        },
      },
    },
  },
});

// Exporting the customized theme for use throughout the application.
export default theme;
