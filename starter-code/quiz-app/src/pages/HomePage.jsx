import { Button, Container, Grid } from "@mui/material";

function HomePage() {
  return (
    <Container maxWidth="sm">
      <h1>Welcome to the Frontend Quiz!</h1>
      <h3>Pick a subject to get started.</h3>
      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid item>
          <Button variant="contained">HTML</Button>
        </Grid>
        <Grid item>
          <Button variant="contained">CSS</Button>
        </Grid>
        <Grid item>
          <Button variant="contained">Javascript</Button>
        </Grid>
        <Grid item>
          <Button variant="contained">Accessibility</Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;
