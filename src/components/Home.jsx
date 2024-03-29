import React from "react";
import { Container, Grid } from "@mui/material";
import Projects from "components/Projects/Projects";
import Skills from "components/Skills/Skills";
import Contact from "components/Contact/Contact";
import Footer from "components/Footer/Footer";
import Hero from "components/Hero/Hero";
import About from "components/About/About";
import { MaskedTypography } from "components/core/MaskedTypography";
import Work from "components/Work/Work";

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        sx={{
          alignItems: "center",
        }}
        id="home"
      >
        <Hero />
      </Grid>

      {/* Main Content */}
      <Grid container spacing={3}>
        <Grid item xs={12} id="about">
          <MaskedTypography variant="h4" gutterBottom align="center">
            About Me
          </MaskedTypography>
          <About />
        </Grid>
        <Grid item xs={12} id="skills">
          <Skills />
        </Grid>
        <Grid item xs={12} id="projects">
          <Projects />
        </Grid>
        <Grid item xs={12} id="work">
          <Work />
        </Grid>
        <Grid item xs={12} id="contact">
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
