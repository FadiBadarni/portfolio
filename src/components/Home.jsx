import React from "react";
import { Container, Grid } from "@mui/material";
import Projects from "components/Work/Work";
import Skills from "components/Skills/Skills";
import Contact from "components/Contact/Contact";
import Footer from "components/Footer/Footer";
import Hero from "components/Hero/Hero";
import About from "components/About/About";

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
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <About />
        </Grid>
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
