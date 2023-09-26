import React from "react";
import { Typography } from "@mui/material";
import { EmorphedBox } from "./EmorphedBox";

const Footer = () => {
  return (
    <EmorphedBox>
      <Typography variant="body1" align="center">
        © 2023 by [Your Name]. All rights reserved.
      </Typography>
    </EmorphedBox>
  );
};

export default Footer;
