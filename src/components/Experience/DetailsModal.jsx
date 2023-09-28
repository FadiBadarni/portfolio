import React from "react";
import { Modal, Typography } from "@mui/material";
import { EmorphedBoxModal } from "components/core/EmorphedBoxModal";

const DetailsModal = ({ open, handleClose, subSkills }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <EmorphedBoxModal
        style={{
          color: "white",
        }}
      >
        {subSkills.map((skill, index) => (
          <Typography key={index}>{skill}</Typography>
        ))}
      </EmorphedBoxModal>
    </Modal>
  );
};

export default DetailsModal;
