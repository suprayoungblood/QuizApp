import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F4F6FA",
    },
    secondary: {
      main: "#FFFFFF",
    },
    // Assuming you want this as your background color, or choose any color you prefer
    background: {
      default: "#F4F6FA",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#F4F6FA", // Set the background color here
        },
      },
    },
  },
});

export default theme;
