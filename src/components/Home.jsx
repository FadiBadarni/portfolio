import React from "react";
import { Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import { MaskedTypography } from "./MaskedTypography";

const Home = () => {
  const textMotionVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.8 } },
  };

  return (
    <Container>
      {/* Hero Section */}
      <Grid
        container
        spacing={4}
        sx={{
          minHeight: "100vh",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} sm={6}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textMotionVariant}
          >
            <MaskedTypography variant="h1" gutterBottom>
              Hello, I'm Fadi
            </MaskedTypography>
            <MaskedTypography variant="h5">
              A Software Engineer specialized in Web Development
            </MaskedTypography>
          </motion.div>
        </Grid>
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
