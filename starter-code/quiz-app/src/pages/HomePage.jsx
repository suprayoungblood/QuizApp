import { Button, Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function HomePage() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to navigate to a given path
  const navigateTo = (path) => () => {
    navigate(path);
  };

  return (
    <Container maxWidth="sm">
      <h1>Welcome to the Frontend Quiz!</h1>
      <h3>Pick a subject to get started.</h3>
      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid item>
          <Button variant="contained" onClick={navigateTo("/html")}>
            HTML
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={navigateTo("/css")}>
            CSS
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={navigateTo("/javascript")}>
            Javascript
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={navigateTo("/accessibility")}>
            Accessibility
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;
