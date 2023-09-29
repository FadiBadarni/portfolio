import React, { useState } from "react";
import {
  Typography,
  Grid,
  Box,
  useTheme,
  useMediaQuery,
  Snackbar,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { motion } from "framer-motion";
import { EmorphedBox } from "components/core/EmorphedBox";
import { MaskedTextField } from "components/core/MaskedTextField";
import { MaskedButton } from "components/core/MaskedButton";
import Colors from "utilities/Colors";
import emailjs from "emailjs-com";

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formValid, setFormValid] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setFormValid(false);
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setFormValid(false);
      return false;
    }
    setFormValid(true);
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;
    const userID = process.env.REACT_APP_USER_ID;

    emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      (_) => {
        setSnackbarMessage("Email sent successfully!");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);
        setIsSubmitting(false);
        setFormSubmitted(true);
      },
      (_) => {
        setSnackbarMessage("Failed to send email. Please try again!");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
        setIsSubmitting(false);
      }
    );
  };

  return (
    <EmorphedBox>
      <Typography variant="h4" gutterBottom align="center">
        Contact Me
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid
          item
          xs={6}
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
                background: `
                  linear-gradient(
                    145deg,
                    ${Colors.raisinBlack} 15%,
                    rgba(101, 92, 115, 0.5) 50%,
                    ${Colors.raisinBlack} 85%
                  )`,
                borderRadius: 4,
                width: isMobile ? "140px" : "220px",
                color: Colors.aestheticSilver,
              }}
            >
              <Typography
                variant={isMobile ? "subtitle1" : "h6"}
                sx={{
                  textAlign: "center",
                }}
              >
                Email
              </Typography>
              <Typography
                variant={isMobile ? "subtitle2" : "subtitle1"}
                align="center"
              >
                fadybd1@gmail.com
              </Typography>
            </Box>
          </motion.div>
        </Grid>
        <Grid
          item
          xs={6}
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
                background: `
                  linear-gradient(
                    35deg,
                    ${Colors.raisinBlack} 15%,
                    rgba(101, 92, 115, 0.5) 50%,
                    ${Colors.raisinBlack} 85%
                  )`,
                borderRadius: 4,
                width: isMobile ? "140px" : "220px",
                color: Colors.aestheticSilver,
              }}
            >
              <Typography
                variant={isMobile ? "subtitle1" : "h6"}
                align="center"
              >
                Phone
              </Typography>
              <Typography
                variant={isMobile ? "subtitle2" : "subtitle1"}
                align="center"
              >
                052-418-3083
              </Typography>
            </Box>
          </motion.div>
        </Grid>

        <Grid item xs={12}>
          {formSubmitted ? (
            <Typography variant="h6" align="center">
              Thank you for your message! I'll get back to you soon.
            </Typography>
          ) : (
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              sx={{
                mt: 3,
                width: "100%",
              }}
              onSubmit={handleSubmit}
            >
              {!formValid && (
                <Typography color="error" align="center">
                  Please fill out all fields correctly.
                </Typography>
              )}
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} sm={6}>
                  <MaskedTextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <MaskedTextField
                    label="Email"
                    variant="outlined"
                    type="email"
                    fullWidth
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <MaskedTextField
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <MaskedButton
                    fullWidth
                    sx={{
                      height: "50px",
                    }}
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </MaskedButton>
                </Grid>
              </Grid>
            </motion.form>
          )}
        </Grid>
      </Grid>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </EmorphedBox>
  );
};

export default Contact;
