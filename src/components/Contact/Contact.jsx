import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import { motion } from "framer-motion";
import { EmorphedBox } from "components/core/EmorphedBox";
import { MaskedTextField } from "components/core/MaskedTextField";
import { MaskedButton } from "components/core/MaskedButton";

const Contact = () => {
  return (
    <EmorphedBox>
      <Typography variant="h4" gutterBottom align="center">
        Contact Me
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid
          item
          xs={12}
          sm={4}
          container
          justifyContent="center"
          alignItems="center"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 9 }}
          >
            <Box
              sx={{
                background: `linear-gradient(
                  to bottom,
                  rgba(255, 255, 255, 0.01) 0%,
                  rgba(255, 255, 255, 0.1) 50%,
                  rgba(255, 255, 255, 0.01) 100%
                )`,
                borderRadius: 10,
                width: "250px",
              }}
            >
              <Typography variant="h6" align="center">
                Email
              </Typography>
              <Typography variant="subtitle1" align="center">
                fadybd1@gmail.com
              </Typography>
            </Box>
          </motion.div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          container
          justifyContent="center"
          alignItems="center"
        >
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 9 }}
          >
            <Box
              sx={{
                background: `linear-gradient(
                  to bottom,
                  rgba(255, 255, 255, 0.01) 0%,
                  rgba(255, 255, 255, 0.1) 50%,
                  rgba(255, 255, 255, 0.01) 100%
                )`,
                borderRadius: 10,
                width: "250px",
              }}
            >
              <Typography variant="h6" align="center">
                Phone
              </Typography>
              <Typography variant="subtitle1" align="center">
                052-418-3083
              </Typography>
            </Box>
          </motion.div>
        </Grid>

        <Grid item xs={12}>
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            sx={{
              mt: 3,
              width: "100%",
            }}
          >
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} sm={6}>
                <MaskedTextField label="Name" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <MaskedTextField
                  label="Email"
                  variant="outlined"
                  type="email"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <MaskedTextField
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <MaskedButton
                  fullWidth
                  sx={{
                    height: "50px",
                  }}
                >
                  Send Message
                </MaskedButton>
              </Grid>
            </Grid>
          </motion.form>
        </Grid>
      </Grid>
    </EmorphedBox>
  );
};

export default Contact;
