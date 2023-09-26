import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const ImageBox = styled(Box)({
  position: "relative",
  "&::before": {
    content: '""',
    display: "block",
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: "10px",
    background:
      "radial-gradient(circle, rgba(237, 231, 246, 0.1), transparent)",
    zIndex: 1,
  },
  "&::after": {
    content: '""',
    display: "block",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "10px",
    background:
      "radial-gradient(circle at 50% 20%, rgba(237, 231, 246, 0.1), transparent)",
    backdropFilter: "blur(10px)",
    zIndex: 1,
  },
});
