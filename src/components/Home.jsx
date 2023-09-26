import React from "react";
import { Container, Grid } from "@mui/material";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";

const Home = () => {
  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Grid
        container
        spacing={2}
        sx={{
          minHeight: "100vh",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Hero />
      </Grid>

      {/* Main Content */}
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Projects />
        </Grid>
        <Grid item xs={12}>
          <Skills />
        </Grid>
        <Grid item xs={12}>
          <Contact />
        </Grid>
      </Grid>

      {/* Footer */}
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
