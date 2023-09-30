import React from "react";
import { Modal, Typography, Stack, Fade, Grid } from "@mui/material";
import { EmorphedBoxModal } from "components/core/EmorphedBoxModal";

const DetailsModal = ({ open, handleClose, subSkills }) => {
  return (
    <Modal open={open} onClose={handleClose} closeAfterTransition>
      <Fade in={open}>
        <EmorphedBoxModal>
          <Stack
            spacing={2}
            alignItems="center"
            sx={{
              p: 2,
              height: "400px",
              overflowY: "auto",
              overflowX: "hidden",
            }}
          >
            <Grid
              container
              spacing={2}
              alignItems="center"
              justifyContent="center"
            >
              {subSkills && subSkills.length > 0 ? (
                subSkills.map((skill, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Typography variant="body1" align="center">
                      {skill}
                    </Typography>
                  </Grid>
                ))
              ) : (
                <Grid item xs={12}>
                  <Typography
                    variant="body2"
                    align="center"
                    color="textSecondary"
                  >
                    No Sub-skills Available
                  </Typography>
                </Grid>
              )}
            </Grid>
          </Stack>
        </EmorphedBoxModal>
      </Fade>
    </Modal>
  );
};

export default DetailsModal;
