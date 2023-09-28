import React, { useState } from "react";
import { Typography, Grid, useTheme, useMediaQuery, Box } from "@mui/material";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { EmorphedBox } from "components/core/EmorphedBox";
import { MaskedButton } from "components/core/MaskedButton";
import Interests from "./Interests";
import { Modal } from "@mui/material";

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (isMobile) {
      // Open PDF in a new tab for mobile screens
      window.open(`${process.env.PUBLIC_URL}/assets/Resume.pdf`, "_blank");
    } else {
      // Open the modal for larger screens
      setOpen(true);
    }
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <EmorphedBox
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: isMobile ? theme.spacing(1) : theme.spacing(2),
      }}
    >
      <Grid
        container
        direction="column"
        spacing={isMobile ? 1 : 2}
        sx={{
          height: "100%",
        }}
      >
        <Grid item xs={12}>
          <Typography
            variant="body1"
            paragraph
            sx={{
              marginBottom: 2,
              fontSize: isMobile ? "1rem" : "1.1rem",
            }}
          >
            I'm a self-driven, collaborative, and learning-focused undergraduate
            software engineering student looking for a challenging internship
            position where I can use my problem-solving abilities, creative
            thinking, and programming knowledge to help develop cutting-edge
            software solutions while expanding my knowledge in the field of
            software engineering.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Interests />
        </Grid>
        <Grid item xs={12} sx={{ textAlign: isMobile ? "center" : "right" }}>
          <MaskedButton
            onClick={handleOpen}
            variant="contained"
            startIcon={<RemoveRedEyeOutlinedIcon />}
            sx={{
              marginTop: 2,
              textTransform: "none",
              padding: isMobile ? "8px 16px" : "10px 20px",
              fontSize: "0.9rem",
            }}
          >
            View CV
          </MaskedButton>
        </Grid>
      </Grid>
      {!isMobile && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "60%",
              maxHeight: "90%",
              backgroundColor: "background.paper",
              padding: 1,
              overflowY: "auto",
              borderRadius: 5,
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/Resume.svg`}
              alt="Resume"
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Modal>
      )}
    </EmorphedBox>
  );
};

export default About;
