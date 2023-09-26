import React from "react";
import { Grid, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { MaskedTypography } from "./MaskedTypography";
import { useTheme } from "@emotion/react";
import { ImageBox } from "./ImageBox";
import { SocialMediaContainer } from "./SocialMediaContainer";

const textMotionVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      spacing={2}
      sx={{ minHeight: "100vh", alignItems: "center" }}
    >
      <Grid item xs={12} sm={6}>
        <Grid
          container
          direction="column"
          sx={{ height: "100%" }}
          justifyContent="center"
        >
          <Grid item sx={{ height: "50%" }}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textMotionVariant}
            >
              <MaskedTypography variant="h5" align="left">
                Hello, I'm
              </MaskedTypography>
              <MaskedTypography
                align="left"
                sx={{
                  fontSize: "10rem",
                  mt: "-2rem",
                  mb: "-2rem",
                  fontWeight: "600",
                }}
              >
                Fadi
              </MaskedTypography>
              <MaskedTypography variant="h5">
                Software Engineer
              </MaskedTypography>
            </motion.div>
          </Grid>
          <Grid
            item
            sx={{
              height: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SocialMediaContainer />
          </Grid>
        </Grid>
      </Grid>
      {!isMobile && (
        <Grid item xs={12} sm={6}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textMotionVariant}
          >
            <ImageBox>
              <img
                src={`${process.env.PUBLIC_URL}/assets/me.webp`}
                alt="Fadi"
                style={{ width: "100%", height: "auto" }}
              />
            </ImageBox>
          </motion.div>
        </Grid>
      )}
    </Grid>
  );
};

export default Hero;
