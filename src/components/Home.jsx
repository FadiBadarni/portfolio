import React from "react";
import { Container, Grid } from "@mui/material";
import Work from "components/Work/Work";
import Skills from "components/Skills/Skills";
import Contact from "components/Contact/Contact";
import Footer from "components/Footer/Footer";
import Hero from "components/Hero/Hero";
import About from "components/About/About";
import { MaskedTypography } from "components/core/MaskedTypography";
import Experience from "components/Experience/Experience";

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
          <MaskedTypography variant="h4" gutterBottom align="center">
            About Me
          </MaskedTypography>
          <About />
        </Grid>
        <Grid item xs={12} md={7}>
          <Skills />
        </Grid>
        <Grid item xs={12} md={5}>
          <Experience />
        </Grid>
        <Grid item xs={12}>
          <Work />
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
