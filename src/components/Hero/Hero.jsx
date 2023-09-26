import React from "react";
import { Grid, useMediaQuery, Button, Box, lighten } from "@mui/material";
import { motion } from "framer-motion";
import { MaskedTypography } from "components/core/MaskedTypography";
import { useTheme } from "@emotion/react";
import { ImageBox } from "components/core/ImageBox";
import { SocialMediaContainer } from "components/core/SocialMediaContainer";
import Colors from "utilities/Colors";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const textMotionVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.1, rotate: [0, 10, -10, 0] },
  tap: { scale: 0.95 },
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
          <Grid item sx={{ height: "50%", mt: 3, mb: 3 }}>
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
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              mt: 3,
              mb: 3,
            }}
          >
            <motion.div
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
            >
              <Button
                variant="contained"
                endIcon={
                  <ArrowDropDownIcon
                    sx={{
                      fontSize: "2.5rem",
                      color: Colors.cultered,
                    }}
                  />
                }
                sx={{
                  backgroundColor: Colors.raisinBlack,
                  color: Colors.white,
                  "&:hover": {
                    backgroundColor: lighten(Colors.raisinBlack, 0.1),
                  },
                  textTransform: "none",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  borderRadius: 1.5,
                }}
                onClick={() => {
                  // Code to navigate to the WORK section
                }}
              >
                <Box component="span" sx={{ pr: 2 }}>
                  View My Work
                </Box>
              </Button>
            </motion.div>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: 1,
              mb: 3,
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
